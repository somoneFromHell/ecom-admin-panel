import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";
import jwt from 'jwt-decode'

//Include Both Helper File with needed methods
import {
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";


function* loginUser({ payload: { user, history } }) {
  try {
     
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response.data));
       const decodedToken = jwt(response.data);
       sessionStorage.setItem("loggedUserData", JSON.stringify(decodedToken));
      if (response) {
        yield put(loginSuccess(response));
        history('/dashboard')
      } else {
        yield put(apiError(response));
      }
    
  } catch (error) {
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

function* socialLogin({ payload: { data, history, type } }) {
  try {
    
      const response = yield call(postSocialLogin, data);
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    
    history('/dashboard')
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeLatest(SOCIAL_LOGIN, socialLogin);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
