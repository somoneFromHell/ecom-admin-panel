import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { CHANGE_PASSWORD } from "./actionTypes";
import { userChangePasswordSuccess, userChangePasswordError } from "./actions";

import { postChangePassword } from "../../../helpers/backendHelper";

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* changePassword({ payload: { user, history } }) {
  try {
    const response = yield call(postChangePassword, {
      password: user.password,
    });
    if (response) {
      yield put(userChangePasswordSuccess(response));
      history("/login");
    }
  } catch (error) {
    yield put(userChangePasswordError(error));
  }
}

export function* watchUserPasswordChange() {
  yield takeEvery(CHANGE_PASSWORD, changePassword);
}

function* changePasswordSaga() {
  yield all([fork(watchUserPasswordChange)]);
}

export default changePasswordSaga;
