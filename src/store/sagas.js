import { all, fork } from "redux-saga/effects";
import LayoutSaga from "./layouts/saga";
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import ProfileSaga from "./auth/profile/saga";
import ecommerceSaga from "./ecommerce/saga";
import dashboardEcommerceSaga from "./dashboardEcommerce/saga";
import changePasswordSaga from "./auth/changePassword/saga";
import userSaga from "./userMaster/saga";



export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(ecommerceSaga),
    fork(dashboardEcommerceSaga),
    fork(changePasswordSaga),
    fork(userSaga)
  ]);
}
