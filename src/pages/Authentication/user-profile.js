import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
} from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";
//redux
import { useSelector, useDispatch } from "react-redux";
// actions
import { editProfile, resetProfileFlag } from "../../store/actions";
import CryptoJS from 'crypto-js';
import { USER_IMAGE_LINK } from "../../helpers/url_helper";


const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState({});

  const dispatch = useDispatch();


  useEffect(() => {

    const encryptedCurrentUser = sessionStorage.getItem("eud");

    if (encryptedCurrentUser) {
      const decryptedCurrentUser =CryptoJS.AES.decrypt(
        encryptedCurrentUser,
        "Key"
      ).toString(CryptoJS.enc.Utf8);
      setCurrentUser(JSON.parse(decryptedCurrentUser));
    }
  }, []);



  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: currentUser,
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please Enter Your UserName"),
    }),
    onSubmit: (values) => {
      dispatch(editProfile(values));
    }
  });

  document.title = "Profile | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg="12">
              {/* {error && error ? <Alert color="danger">{error}</Alert> : null} */}
              {/* {success ? <Alert color="success">Username Updated To {currentUser.firstName}</Alert> : null} */}

              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="mx-3">
                      <img
                        src={USER_IMAGE_LINK+currentUser.profileImage}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">
                        <h5>{currentUser.firstName+" "+currentUser.lastName+" "+currentUser.middleName}</h5>
                        <p className="mb-1">Email Id : {currentUser.email}</p>
                        <p className="mb-0">Id No : #{currentUser._id}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <h4 className="card-title mb-4">Change User Name</h4>

          <Card>
            <CardBody>
              <Form
                className="form-horizontal"
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <div className="form-group">
                  <Label className="form-label">User Name</Label>
                  <Input
                    name="firstName"
                    // value={name}
                    className="form-control"
                    placeholder="Enter User Name"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.firstName || ""}
                    invalid={
                      validation.touched.firstName && validation.errors.firstName ? true : false
                    }
                  />
                  {validation.touched.firstName && validation.errors.firstName ? (
                    <FormFeedback type="invalid">{validation.errors.firstName}</FormFeedback>
                  ) : null}
                </div>
                <div className="text-center mt-4">
                  <Button type="submit" color="danger">
                    Update User Name
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
