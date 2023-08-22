import {GET_LOGGEDIN_USER} from "./actionTypes"

export const toLoggedinUser = (actionType, data) => ({
  type: GET_LOGGEDIN_USER,
  payload: { actionType, data },
});