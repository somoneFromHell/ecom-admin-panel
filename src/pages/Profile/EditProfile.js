import React, { useState, useEffect } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
} from "reactstrap";
import Dropzone from "react-dropzone";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { USER_IMAGE_LINK } from "../../helpers/url_helper";
import { editProfileData } from "../../helpers/backendHelper";

document.title = "Profile | simons rana";

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { user: currentUser } = useSelector((state) => ({
    user: state.Profile.user,
  }));

  useEffect(() => {
    if (currentUser) {
      setSelectedImage(USER_IMAGE_LINK + currentUser.profileImage);
    }
  }, [currentUser]);

  const handleAcceptedFiles = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: currentUser.firstName,
      middleName: currentUser.middleName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      profileimage: currentUser.profileImage,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please Enter Your first Name"),
      middleName: Yup.string().required("Please Enter Your middle Name"),

      lastName: Yup.string().required("Please Enter Your last Name"),
      email: Yup.string().required("Please Enter Your email"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // dispatch(editProfile(values));
      editProfileData(values);
    },
  });

  return (
    <React.Fragment>
      <h4 className="card-title mb-4">Edit your pesonal details</h4>
      <Form
        id="creattask-form"
        onSubmit={(e) => {
          e.preventDefault();
          validation.handleSubmit();
          return false;
        }}
      >
        <Row>
        <Col >
          <Dropzone className="mt=10"
            onDrop={(acceptedFiles) => {
              handleAcceptedFiles(acceptedFiles);
              const file = acceptedFiles[0];
              setSelectedImage(URL.createObjectURL(file));
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div className="dropzone dz-clickable">
                <div className="dz-message needsclick" {...getRootProps()}>
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
        <Col >
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
            {validation.touched.firstName && validation.errors.firstName ? (
              <FormFeedback type="invalid">
                {validation.errors.firstName}
              </FormFeedback>
            ) : null}
          </div>
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
            {validation.touched.middleName && validation.errors.middleName ? (
              <FormFeedback type="invalid">
                {validation.errors.middleName}
              </FormFeedback>
            ) : null}
          </div>
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
          <Col md={1}>
            <Button color="primary" type="submit">
              {" "}
              Save{" "}
            </Button>
          </Col>
        </Col>

        </Row>

      </Form>
    </React.Fragment>
  );
};

export default EditProfile;
