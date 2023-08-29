import { all, fork } from "redux-saga/effects";
//layout
import LayoutSaga from "./layouts/saga";
//Auth
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import ProfileSaga from "./auth/profile/saga";

//ecommerce
import ecommerceSaga from "./ecommerce/saga";

import taskSaga from "./tasks/saga";


// Dashboard Ecommerce
import dashboardEcommerceSaga from "./dashboardEcommerce/saga";


// Pages > Team
import teamSaga from "./team/saga";
import changePasswordSaga from "./auth/changePassword/saga";





export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(taskSaga),
    fork(ecommerceSaga),
    fork(dashboardEcommerceSaga),
    fork(teamSaga),
    fork(changePasswordSaga)
  ]);
}
