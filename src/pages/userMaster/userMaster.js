import React, { useState, useEffect, useCallback } from "react";
import {
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Label,
} from "reactstrap";
import Dropzone from "react-dropzone";
import Dragula from "react-dragula";
import { isEmpty } from "lodash";

import { ToastContainer } from "react-toastify";
import DeleteModal from "../../Components/Common/DeleteModal";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import { USER_IMAGE_LINK } from "../../helpers/url_helper";
import { getUsers, setFatchedUsers } from "../../store/userMaster/actions";

const RoleData = [
  { _id: "64e30763d3bcb4281c3099d6", roleName: "Admin" },
  { _id: "64e30801d3bcb4281c3099e4", roleName: "Customer" },
];

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

  const [selectedImage, setSelectedImage] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [UsersList, setuserList] = useState([]);
  const [todo, setTodo] = useState(null);
  const [modalTodo, setModalTodo] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const { userList } = useSelector((state) => ({
    userList: state.Users.userList,
  }));

  useEffect(() => {
    setuserList(userList);
  }, [userList]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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

  const handleAcceptedFiles = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  // To do Task List validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      firstName: (todo && todo.task) || "",
      middleName: (todo && todo.task) || "",
      lastName: (todo && todo.task) || "",
      role: (todo && todo.task) || "",
      email: (todo && todo.task) || "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("required"),
      middleName: Yup.string().required("required"),
      lastName: Yup.string().required("required"),
      role: Yup.string().required("required"),
      email: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      console.log("called");
      if (isEdit) {
        const updateTodo = {
          firstName: values.firstName,
          middleName: values.middleName,
          lastName: values.lastName,
          role: values.role,
          email: values.email,
        };
        // save edit Folder
        //  dispatch(onupdateTodo(updateTodo));
        console.log(updateTodo);
        validation.resetForm();
      } else {
        const newTodo = {
          firstName: values.firstName,
          middleName: values.middleName,
          lastName: values.lastName,
          role: values.role,
          email: values.email,
        };
        // save new Folder
        //  dispatch(onAddNewTodo(newTodo));
        console.log(newTodo);

        validation.resetForm();
      }
      toggle();
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
                {isEmpty(UsersList) && (
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
                        {UsersList.map((item, key) => (
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
                                        src={
                                          USER_IMAGE_LINK + item.profileImage
                                        }
                                        alt=""
                                        className="rounded-circle avatar-xxs"
                                      />
                                    }
                                  </div>
                                </td>
                                <td>{item.firstName}</td>
                                <td>{item.middleName}</td>
                                <td>{item.lastName}</td>
                                <td>
                                  <Status status={item.role} />
                                </td>
                                <td>{item.email}</td>

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
                            ))
                          }
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
            <Row>
              <Col md={12}>
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    handleAcceptedFiles(acceptedFiles);
                    const file = acceptedFiles[0];
                    setSelectedImage(URL.createObjectURL(file));
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div className="dropzone dz-clickable">
                      <div
                        className="dz-message needsclick"
                        {...getRootProps()}
                      >
                        <input
                          {...getInputProps()}
                          accept="image/*"
                          multiple="false"
                        />

                        <div>
                          {selectedImage ? (
                            <div
                              style={{
                                maxWidth: "100%",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                src={selectedImage}
                                alt="Selected"
                                style={{ maxWidth: "100%" }}
                              />
                            </div>
                          ) : (
                            <div>
                              <div className="mb-3">
                                <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                              </div>
                              <h4>Drop files here or click to upload.</h4>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </Dropzone>
              </Col>

              <Col md={12}>
                <div className="mb-3">
                  <Label htmlFor="firstNameinput" className="form-label">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    id="firstName"
                    name="firstName"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.firstName || ""}
                  />
                  {validation.touched.firstName &&
                  validation.errors.firstName ? (
                    <FormFeedback type="invalid">
                      {validation.errors.firstName}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col md={12}>
                <div className="mb-3">
                  <Label htmlFor="lastNameinput" className="form-label">
                    Middle Name
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="middle name"
                    id="middleName"
                    name="middleName"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.middleName || ""}
                  />
                  {validation.touched.middleName &&
                  validation.errors.middleName ? (
                    <FormFeedback type="invalid">
                      {validation.errors.middleName}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col md={12}>
                <div className="mb-3">
                  <Label htmlFor="lastNameinput" className="form-label">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="last name"
                    id="lastName"
                    name="lastName"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.lastName || ""}
                  />
                  {validation.touched.lastName && validation.errors.lastName ? (
                    <FormFeedback type="invalid">
                      {validation.errors.lastName}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col md={12}>
                <div className="mb-3">
                  <Label htmlFor="compnayNameinput" className="form-label">
                    role
                  </Label>
                  <select
                    id="role"
                    name="role"
                    className="form-select"
                    data-choices
                    data-choices-sorting="true"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.role}
                  >
                    <option>seelct...</option>
                    {RoleData.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.roleName}
                      </option>
                    ))}
                  </select>
                  {validation.touched.role && validation.errors.role ? (
                    <FormFeedback type="invalid">
                      {validation.errors.role}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col md={12}>
                <div className="mb-3">
                  <Label htmlFor="compnayNameinput" className="form-label">
                    email
                  </Label>
                  <Input
                    name="email"
                    id="email"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.email}
                    type="text"
                    className="form-control"
                    placeholder="email"
                  />
                  {validation.touched.email && validation.errors.email ? (
                    <FormFeedback type="invalid">
                      {validation.errors.email}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
            </Row>

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
