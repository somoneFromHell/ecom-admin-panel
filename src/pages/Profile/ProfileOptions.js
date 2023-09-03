import {
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledTooltip,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePAssword";

const ProfileOPtions = () => {
  // Border Top Nav
  const [topBorderTab, settopBorderTab] = useState("1");
  const topBordertoggle = (tab) => {
    if (topBorderTab !== tab) {
      settopBorderTab(tab);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h5 className="mb-3">User Profile Options</h5>
          <Card >
            <CardBody>
              
              <Nav
                tabs
                className="nav nav-tabs  nav-border-top nav-border-top-success mb-3"
              >
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({ active: topBorderTab === "1" })}
                    onClick={() => {
                      topBordertoggle("1");
                    }}
                  >
                    <i className="ri-user-line align-middle me-1"></i> Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({ active: topBorderTab === "2" })}
                    onClick={() => {
                      topBordertoggle("2");
                    }}
                  >
                    <i className="ri-edit-line me-1 align-middle"></i> Edit Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({ active: topBorderTab === "3" })}
                    onClick={() => {
                      topBordertoggle("3");
                    }}
                  >
                    <i className="ri-lock-line align-middle me-1"></i>
                    Reset Password
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={topBorderTab} className="text-muted">
                <TabPane tabId="1" id="nav-border-justified-home">
                  <Profile></Profile>
                </TabPane>

                <TabPane tabId="2" id="nav-border-justified-profile">
                  <EditProfile></EditProfile>
                </TabPane>

                <TabPane tabId="3" id="nav-border-justified-messages">
                  <ChangePassword></ChangePassword>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ProfileOPtions;
