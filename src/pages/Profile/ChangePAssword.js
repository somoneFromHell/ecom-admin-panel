import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Alert,
  CardBody,
  CardHeader,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
} from "reactstrap";


import * as Yup from "yup";
import { useFormik } from "formik";
import { editProfileData } from "../../helpers/backendHelper";

const ChangePassword = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confrimPasswordShow, setConfrimPasswordShow] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Please Enter Your old password"),
      newPassword: Yup.string().required("plese provide new password"),
      confirmPassword: Yup.string().required("plese enter same password here"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // dispatch(editProfile(values));
      editProfileData(values);
    },
  });
  return (
    <React.Fragment>
        <CardHeader className="p-0">
          <Alert
            color="warning"
            className="alert-solid alert-label-icon border-0 rounded-0 m-0 d-flex align-items-center"
            role="alert"
          >
            <i className="ri-error-warning-line label-icon"></i>
            <div className="flex-grow-1 text-truncate">
              After the operation is successfully completed, you will be{" "}
              <b>logged out</b>. Subsequently, you will need to log in again
              using a new password.
            </div>
          </Alert>
        </CardHeader>
        <CardBody>
          <Form
            id="creattask-form"
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <Row style={{ display: "flee", justifyContent: "center" }}>
              <Col md={3}>
                <div className="mb-3">
                  <Label htmlFor="oldPasswordinput" className="form-label">
                    Old password
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="old password"
                    id="oldPassword"
                    name="oldPassword"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.oldPassword || ""}
                  />
                  {validation.touched.oldPassword &&
                  validation.errors.oldPassword ? (
                    <FormFeedback type="invalid">
                      {validation.errors.oldPassword}
                    </FormFeedback>
                  ) : null}
                </div>
                <div className="mb-3">
                  <Label className="form-label" htmlFor="password-input">
                    Password
                  </Label>
                  <div className="position-relative auth-pass-inputgroup">
                    <Input
                      type={passwordShow ? "text" : "password"}
                      className="form-control pe-5 password-input"
                      placeholder="Enter password"
                      id="newPassword"
                      name="newPassword"
                      value={validation.values.newPassword}
                      onBlur={validation.handleBlur}
                      onChange={validation.handleChange}
                      invalid={
                        validation.errors.passwnewPasswordord &&
                        validation.touched.newPassword
                          ? true
                          : false
                      }
                    />
                    {validation.errors.newPassword &&
                    validation.touched.newPassword ? (
                      <FormFeedback type="invalid">
                        {validation.errors.newPassword}
                      </FormFeedback>
                    ) : null}
                    <Button
                      color="link"
                      onClick={() => setPasswordShow(!passwordShow)}
                      className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                      type="button"
                      id="password-addon"
                    >
                      <i className="ri-eye-fill align-middle"></i>
                    </Button>
                  </div>
                 
                </div>

                <div className="mb-3">
                  <Label
                    className="form-label"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </Label>
                  <div className="position-relative auth-pass-inputgroup mb-3">
                    <Input
                      type={confrimPasswordShow ? "text" : "password"}
                      className="form-control pe-5 password-input"
                      placeholder="Confirm password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={validation.values.confirmPassword}
                      onBlur={validation.handleBlur}
                      onChange={validation.handleChange}
                      invalid={
                        validation.errors.confirmPassword &&
                        validation.touched.confirmPassword
                          ? true
                          : false
                      }
                    />
                    {validation.errors.confirmPassword &&
                    validation.touched.confirmPassword ? (
                      <FormFeedback type="invalid">
                        {validation.errors.confirmPassword}
                      </FormFeedback>
                    ) : null}
                    <Button
                      color="link"
                      onClick={() =>
                        setConfrimPasswordShow(!confrimPasswordShow)
                      }
                      className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                      type="button"
                    >
                      <i className="ri-eye-fill align-middle"></i>
                    </Button>
                  </div>
                </div>

                <div
                  id="password-contain"
                  className="p-3 bg-light mb-2 rounded"
                >
                  <h5 className="fs-13">Password must contain:</h5>
                  <p id="pass-length" className="invalid fs-12 mb-2">
                    Minimum <b>8 characters</b>
                  </p>
                  <p id="pass-lower" className="invalid fs-12 mb-2">
                    At <b>lowercase</b> letter (a-z)
                  </p>
                  <p id="pass-upper" className="invalid fs-12 mb-2">
                    At least <b>uppercase</b> letter (A-Z)
                  </p>
                  <p id="pass-number" className="invalid fs-12 mb-0">
                    A least <b>number</b> (0-9)
                  </p>
                </div>
                <Col>
                  
                  <Button type="submit" color="primary">
                    proceed
                  </Button>
                </Col>
              </Col>
            </Row>
          </Form>
        </CardBody>
    </React.Fragment>
  );
};

export default ChangePassword;
