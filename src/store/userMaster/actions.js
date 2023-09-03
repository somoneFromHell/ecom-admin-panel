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
  API_RESPONSE_SUCCESS,
  API_RESPONSE_FAIL
} from "./actionTypes";


export const getUsers = () => ({
  type: GET_USERS,
});

export const getUsersFail = (actionType,error) => ({
  type: GET_USERS_FAIL,
  payload: {actionType,error},
});

export const getUsersSuccess = (actionType,data) => ({
  type: GET_USERS_SUCCESS,
  payload: {actionType,data},
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const updateUserFail = (error) => ({
  type: UPDATE_USER_FAIL,
  payload: error,
});

export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const createUser = (user) => ({
  type: ADD_NEW_USER,
  payload: user,
});

export const creteUseFail = (error) => ({
  type: ADD_USER_FAIL,
  payload: error,
});

export const createUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

export const deleteUser = (user) => ({
  type: DELETE_USER,
  payload: user,
});

export const deleteUserFail = (user) => ({
  type: DELETE_USER_FAIL,
  payload: user,
});

export const deleteUserSuccess = (user) => ({
  type: DELETE_USER_SUCCESS,
  payload: user,
});
