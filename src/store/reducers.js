import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

//Ecommerce
import Ecommerce from "./ecommerce/reducer";

// Tasks
import Tasks from "./tasks/reducer";
//Form advanced
import changeNumber from "./formAdvanced/reducer";

// Dashboard Ecommerce
import DashboardEcommerce from "./dashboardEcommerce/reducer";


// Pages > Team
import Team from "./team/reducer";


//Users
import Users from "./userMaster/reducer";

const rootReducer = combineReducers({
    // public
    Layout,
    Login,
    Account,
    ForgetPassword,
    Profile,
    Ecommerce,
    Tasks,
    changeNumber,
    DashboardEcommerce,
    Team,
    Users
});

export default rootReducer;