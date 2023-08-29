import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
} from "./actionTypes";

export const userChangePassword = (user, history) => {
  return {
    type: CHANGE_PASSWORD,
    payload: { user, history },
  };
};

export const userChangePasswordSuccess = message => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: message,
  };
};

export const userChangePasswordError = message => {
  return {
    type: CHANGE_PASSWORD_ERROR,
    payload: message,
  };
};
