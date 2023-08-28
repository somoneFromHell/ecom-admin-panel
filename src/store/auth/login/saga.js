import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import CryptoJS from 'crypto-js';
// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";
import jwtDecode from "jwt-decode";

import { postLogin } from "../../../helpers/backendHelper";
import { getLoggedinUser } from "../../../helpers/backendHelper";

function* loginUser({ payload: { user, history } }) {
  const secretKey = 'Key';
  try {
    
    if (process.env.BASE_API_URL !== "") {
      const response = yield call(postLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      const token = response.data;
      if (token) {

        const decodedToken = jwtDecode(token);
        const currentUser = yield call(getLoggedinUser, decodedToken.userId);
        const encryptedUserData = CryptoJS.AES.encrypt(JSON.stringify(currentUser.data), secretKey).toString();
        sessionStorage.setItem('eud', encryptedUserData);
        yield put(loginSuccess(response));
        history("/dashboard");
      } else {
        yield put(apiError(response.error.message));
      }
    }
  } catch (error) {
    console.log(error);
    yield put(apiError(error));
  }
}

function* logoutUser() {
  try {
    sessionStorage.removeItem("authUser");

    yield put(logoutUserSuccess(LOGOUT_USER, true));
  } catch (error) {
    yield put(apiError(LOGOUT_USER, error));
  }
}



function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
