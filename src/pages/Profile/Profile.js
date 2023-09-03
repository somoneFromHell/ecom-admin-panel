import { USER_IMAGE_LINK } from "../../helpers/url_helper";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import {Link} from "react-router-dom"
import {CardHeader,CardBody} from "reactstrap";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { user: currentUser } = useSelector((state) => ({
    user: state.Profile.user,
  }));
  useEffect(() => {
    if (currentUser) {
      setSelectedImage(USER_IMAGE_LINK + currentUser.profileImage);
    }
  }, [currentUser]);

  return (
    <React.Fragment>
      

      
      <CardBody className="p-4 text-center">
        <div className="mx-auto avatar-md mb-3">
          <img
            src={USER_IMAGE_LINK + currentUser.profileImage}
            alt=""
            className="img-fluid rounded-circle"
          />
        </div>
        <h5 className="card-title mb-1">
          {currentUser.firstName +
            " " +
            currentUser.lastName +
            " " +
            currentUser.middleName}
        </h5>
        <p className="text-muted mb-0">{currentUser.email}</p>
        <p className="text-muted mb-0">{currentUser.role.roleName}</p>
      </CardBody>
      <div className="card-footer text-center">
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <Link to="#" className="lh-1 align-middle link-secondary">
              <i className="ri-facebook-fill"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="lh-1 align-middle link-success">
              <i className="ri-whatsapp-line"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="lh-1 align-middle link-primary">
              <i className="ri-linkedin-fill"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="lh-1 align-middle link-danger">
              <i className="ri-slack-fill"></i>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Profile;
