import React, { useState, useEffect, useCallback } from "react";
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  Form,
  FormFeedback,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  UncontrolledButtonDropdown,
  UncontrolledCollapse,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import Dragula from "react-dragula";
import { ToastContainer } from "react-toastify";
import DeleteModal from "../../Components/Common/DeleteModal";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { fatchUsers as getUsers } from "../../helpers/backendHelper";
import {
  ERROR_IN_FETCHING_USER_DATA,
  GET_FETCHED_USERS,
} from "../../store/userMaster/actionTypes";
import { USER_IMAGE_LINK } from "../../helpers/url_helper";

const Status = ({ status }) => {
  switch (status) {
    case "New":
      return (
        <span className="badge badge-soft-info text-uppercase">{status}</span>
      );
    case "Pending":
      return (
        <span className="badge badge-soft-warning text-uppercase">
          {status}
        </span>
      );
    case "Inprogress":
      return (
        <span className="badge badge-soft-secondary text-uppercase">
          {status}
        </span>
      );
    case "Completed":
      return (
        <span className="badge badge-soft-success text-uppercase">
          {status}
        </span>
      );
    default:
      return (
        <span className="badge badge-soft-success text-uppercase">
          {status}
        </span>
      );
  }
};

const Priority = ({ priority }) => {
  switch (priority) {
    case "High":
      return <span className="badge bg-danger text-uppercase">{priority}</span>;
    case "Medium":
      return (
        <span className="badge bg-warning text-uppercase">{priority}</span>
      );
    case "Low":
      return (
        <span className="badge bg-success text-uppercase">{priority}</span>
      );
    default:
      return (
        <span className="badge bg-success text-uppercase">{priority}</span>
      );
  }
};

const UserMaster = () => {
  document.title = "User master";

  const [deleteModal, setDeleteModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [userList, setUserList] = useState([]);
  // To do Task List
  const [todo, setTodo] = useState(null);
  const [modalTodo, setModalTodo] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => ({
    todos: state.Users,
  }));

  const { users } = useSelector((state) => ({
    users: state.Users.listOfUsers,
  }));

  useEffect(() => {
    getUsers()
      .then((response) => {
        dispatch({ type: GET_FETCHED_USERS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR_IN_FETCHING_USER_DATA, payload: error.message });
      });
  }, [dispatch]);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  const toggle = useCallback(() => {
    if (modalTodo) {
      setModalTodo(false);
      setTodo(null);
    } else {
      setModalTodo(true);
    }
  }, [modalTodo]);

  // Update To do
  const handleEdit = useCallback(
    (arg) => {
      const todo = arg;
      setTodo({
        id: todo.id,
        task: todo.task,
        dueDate: todo.dueDate,
        status: todo.status,
        priority: todo.priority,
      });
      setIsEdit(true);
      toggle();
    },
    [toggle]
  );

  // Add To do
  const handleEdits = () => {
    setTodo("");
    setModalTodo(!modalTodo);
    setIsEdit(false);
    toggle();
  };

  // Delete To do
  const handleDelete = (todo) => {
    setTodo(todo);
    setDeleteModal(true);
  };

  const handleDeleteTodo = () => {
    // if (todo) {
    //   dispatch(onDeleteTodo(todo));
    //   setDeleteModal(false);
    // }
  };

  const sortbystatus = [
    {
      options: [
        { label: "Completed", value: "Completed" },
        { label: "Inprogress", value: "Inprogress" },
        { label: "New", value: "New" },
        { label: "Pending", value: "Pending" },
      ],
    },
  ];

  const sortbypriority = [
    {
      options: [
        { label: "High", value: "High" },
        { label: "Medium", value: "Medium" },
        { label: "Low", value: "Low" },
      ],
    },
  ];

  const searchList = (e) => {
    let inputVal = e.toLowerCase();

    function filterItems(arr, query) {
      return arr.filter(function (el) {
        return el.task.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    }

    let filterData = filterItems(todos, inputVal);
    setTaskList(filterData);
    if (filterData.length === 0) {
      document.getElementById("noresult").style.display = "block";
      document.getElementById("todo-task").style.display = "none";
    } else {
      document.getElementById("noresult").style.display = "none";
      document.getElementById("todo-task").style.display = "block";
    }
  };

  const taskSort = (e) => {
    if (e) {
      setTaskList(todos.sort((a, b) => a.id - b.id));
      setTaskList(
        todos.sort((a, b) => {
          let x = a.task.toLowerCase();
          let y = b.task.toLowerCase();
          if (x < y) {
            return -1;
          } else if (x > y) {
            return 1;
          } else {
            return 0;
          }
        })
      );
    }
  };

  // To do Task List validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      task: (todo && todo.task) || "",
      dueDate: (todo && todo.dueDate) || "",
      status: (todo && todo.status) || "",
      priority: (todo && todo.priority) || "",
    },
    validationSchema: Yup.object({
      task: Yup.string().required("Please Enter Task"),
      // dueDate: Yup.string().required("Please Enter Date"),
      // status: Yup.string().required("Please Enter Status"),
      // priority: Yup.string().required("Please Enter Priority"),
    }),
    onSubmit: (values) => {
      //   if (isEdit) {
      //     const updateTodo = {
      //       id: todo ? todo.id : 0,
      //       task: values.task,
      //       dueDate: date,
      //       status: values.status,
      //       priority: values.priority,
      //     };
      //     // save edit Folder
      //     dispatch(onupdateTodo(updateTodo));
      //     validation.resetForm();
      //   } else {
      //     const newTodo = {
      //       id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
      //       task: values.task,
      //       dueDate: date,
      //       status: values.status,
      //       priority: values.priority,
      //       subItem: assigned,
      //     };
      //     // save new Folder
      //     dispatch(onAddNewTodo(newTodo));
      //     validation.resetForm();
      //   }
      //   toggle();
    },
  });

  const dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {};
      Dragula([componentBackingInstance], options);
    }
  };

  return (
    <React.Fragment>
      <ToastContainer closeButton={false} />
      <DeleteModal
        show={deleteModal}
        onDeleteClick={() => handleDeleteTodo()}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          <div className="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
            <div className="file-manager-content w-100 p-4 pb-0">
              <div className="hstack mb-4">
                <h5 className="fw-semibold flex-grow-1 mb-0">
                  Velzon Admin & Dashboard{" "}
                  <span className="badge bg-primary align-bottom ms-2">
                    v1.7.0
                  </span>
                </h5>
                <div className="hstack gap-2">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button className="btn btn-icon fw-semibold btn-soft-danger">
                      <i className="ri-arrow-go-back-line"></i>
                    </button>
                    <button className="btn btn-icon fw-semibold btn-soft-success">
                      <i className="ri-arrow-go-forward-line"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-light rounded mb-4">
                <Row className="g-2">
                  <Col className="col-lg-auto">
                    <select
                      className="form-control"
                      name="choices-select-sortlist"
                      id="choices-select-sortlist"
                      onChange={(e) => taskSort(e.target.value)}
                    >
                      <option value="">Sort</option>
                      <option value="By ID">By ID</option>
                      <option value="By Name">By Name</option>
                    </select>
                  </Col>

                  <Col className="col-lg">
                    <div className="search-box">
                      <input
                        type="text"
                        id="searchTaskList"
                        className="form-control search"
                        placeholder="Search task name"
                        onKeyUp={(e) => searchList(e.target.value)}
                      />
                      <i className="ri-search-line search-icon"></i>
                    </div>
                  </Col>
                  <Col className="col-lg-auto">
                    <button
                      className="btn btn-primary createTask"
                      type="button"
                      onClick={() => handleEdits()}
                    >
                      <i className="ri-add-fill align-bottom" /> Add Tasks
                    </button>
                  </Col>
                </Row>
              </div>

              <div
                className="todo-content position-relative px-4 mx-n4"
                id="todo-content"
              >
                {!todos && (
                  <div id="elmLoader">
                    <div
                      className="spinner-border text-primary avatar-sm"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}

                <div className="todo-task" id="todo-task">
                  <div className="table-responsive">
                    <table className="table align-middle position-relative">
                      <thead className="table-active">
                        <tr>
                          <th scope="col">select</th>
                          <th scope="col">profileImage</th>
                          <th scope="col">first name</th>
                          <th scope="col">middle name</th>
                          <th scope="col">last name</th>
                          <th scope="col">role</th>
                          <th scope="col">email</th>
                          <th scope="col">action</th>
                        </tr>
                      </thead>

                      <tbody id="task-list" ref={dragulaDecorator}>
                        {(userList || []).map((item, key) => (
                          <tr key={key}>
                            <td>
                              <div className="d-flex align-items-start">
                                <div className="flex-shrink-0 me-3">
                                  <div className="task-handle px-1 bg-light rounded">
                                    : :
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="avatar-group">
                                {
                                  <img
                                    src={USER_IMAGE_LINK + item.profileImage}
                                    alt=""
                                    className="rounded-circle avatar-xxs"
                                  />
                                }
                              </div>
                            </td>
                            <td>{item.firstName}</td>
                            <td>
                              <td>{item.middleName}</td>
                            </td>
                            <td>
                              <td>{item.lastName}</td>
                            </td>
                            <td>
                              <Status status={item.role} />
                            </td>
                            <td>
                              <td>{item.email}</td>
                            </td>
                            

                            <td>
                              <div className="hstack gap-2">
                                <button
                                  className="btn btn-sm btn-soft-danger remove-list"
                                  onClick={() => handleDelete(item)}
                                >
                                  <i className="ri-delete-bin-5-fill align-bottom" />
                                </button>
                                <button
                                  className="btn btn-sm btn-soft-info edit-list"
                                  onClick={() => handleEdit(item)}
                                >
                                  <i className="ri-pencil-fill align-bottom" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="py-4 mt-4 text-center"
                  id="noresult"
                  style={{ display: "none" }}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/msoeawqm.json"
                    trigger="loop"
                    colors="primary:#405189,secondary:#0ab39c"
                    style={{ width: "72px", height: "72px" }}
                  ></lord-icon>
                  <h5 className="mt-4">Sorry! No Result Found</h5>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Modal
        id="createTask"
        isOpen={modalTodo}
        toggle={toggle}
        modalClassName="zoomIn"
        centered
        tabIndex="-1"
      >
        <ModalHeader toggle={toggle} className="p-3 bg-soft-success">
          {" "}
          {!!isEdit ? "Edit User" : "Create new user"}{" "}
        </ModalHeader>
        <ModalBody>
          <div id="task-error-msg" className="alert alert-danger py-2"></div>
          <Form
            id="creattask-form"
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <div className="mb-3">
              <label htmlFor="task-title-input" className="form-label">
                First name
              </label>
              <input
                type="text"
                id="task-title-input"
                className="form-control"
                placeholder="Enter first name"
                name="fName"
                // validate={{ required: { value: true }, }}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.task || ""}
                // invalid={validation.touched.task && validation.errors.task ? true : false}
              />
              {validation.touched.task && validation.errors.task ? (
                <FormFeedback type="invalid">
                  {validation.errors.task}
                </FormFeedback>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="task-duedate-input" className="form-label">
                Due Date:
              </label>
            </div>

            <div className="hstack gap-2 justify-content-end">
              <button
                type="button"
                className="btn btn-ghost-success"
                onClick={() => setModalTodo(false)}
              >
                <i className="ri-close-fill align-bottom"></i> Close
              </button>
              <button type="submit" className="btn btn-primary" id="addNewTodo">
                {!!isEdit ? "Save" : "Add Task"}
              </button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default UserMaster;
