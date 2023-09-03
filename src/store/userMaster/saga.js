import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  ADD_NEW_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
} from "./actionTypes";

import {
  getUsers as getUsersApi,

} from "../../helpers/backendHelper";
import { createUser, getUsersFail, getUsersSuccess } from "./actions";

function* getUsersList(){
    try {
        const response = yield call(getUsersApi);
        yield put(getUsersSuccess(GET_USERS,response.data));
    } catch (error) {
        yield put(getUsersFail(GET_USERS,error));
    }
}

export function* watchGetUsers(){
    yield takeEvery(GET_USERS,getUsersList);
}

function * userSaga(){
    yield all([
        fork(watchGetUsers)
    ])
}

export default userSaga;
