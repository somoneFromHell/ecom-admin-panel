import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CryptoJS from "crypto-js";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

//import images
import { USER_IMAGE_LINK } from "../../helpers/url_helper";

const ProfileDropdown = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => ({
    user: state.Profile.user,
  }));

  const [currentUser, setCurrentUser] = useState({});

  const getEnctiptedUser = () => {
    const encryptedCurrentUser = sessionStorage.getItem("eud");

    if (encryptedCurrentUser) {
      const decryptedCurrentUser = CryptoJS.AES.decrypt(
        encryptedCurrentUser,
        "Key"
      ).toString(CryptoJS.enc.Utf8);
      setCurrentUser(JSON.parse(decryptedCurrentUser));
    }
  };

  useEffect(() => {
    getEnctiptedUser();
  }, []);
  console.log(currentUser);

  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  return (
    <React.Fragment>
      <Dropdown
        isOpen={isProfileDropdown}
        toggle={toggleProfileDropdown}
        className="ms-sm-3 header-item topbar-user"
      >
        <DropdownToggle tag="button" type="button" className="btn">
          <span className="d-flex align-items-center">
            <img
              className="rounded-circle header-profile-user"
              src={USER_IMAGE_LINK + currentUser.profileImage}
              alt="Header Avatar"
            />
            <span className="text-start ms-xl-2">
              <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                {currentUser.firstName +
                  " " +
                  currentUser.middleName +
                  " " +
                  currentUser.lastName}
              </span>
              <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                {/* {currentUser.role.roleName} */}
              </span>
            </span>
          </span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <h6 className="dropdown-header">
            Welcome {currentUser.firstName + " " + currentUser.lastName}!
          </h6>
          <DropdownItem>
            <div
              onClick={() => {
                navigate("/profile");
              }}
            >
              <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
              <span className="align-middle">Profile</span>
            </div>
          </DropdownItem>
          <DropdownItem>
            <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Messages</span>
          </DropdownItem>
          <DropdownItem href="#">
            <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Taskboard</span>
          </DropdownItem>
          <DropdownItem href="/pages-faqs">
            <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Help</span>
          </DropdownItem>
          <div className="dropdown-divider"></div>

          <DropdownItem href="/pages-profile-settings">
            <span className="badge bg-soft-success text-success mt-1 float-end">
              New
            </span>
            <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Settings</span>
          </DropdownItem>

          <DropdownItem href="/logout">
            <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle" data-key="t-logout">
              Logout
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileDropdown;
