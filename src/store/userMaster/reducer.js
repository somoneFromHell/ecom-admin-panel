import {
  ADD_NEW_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  API_RESPONSE_FAIL,
  API_RESPONSE_SUCCESS,
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

const initialState = {
  userList: [],
  error: "",
  isUserCreated: false,
  isUserSuccess: false,
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      switch (action.payload.actionType) {
        case GET_USERS:
          return {
            ...state,
            userList: action.payload.data,
            isUserCreated: false,
            isUserSuccess: true,
          };
        default:
          return { ...state };
      }
    case GET_USERS_FAIL:
      switch (action.payload.actionType) {
        case GET_USERS:
          return {
            ...state,
            userList: action.payload.error,
            isUserCreated: false,
            isUserSuccess: true,
          };
        default:
          return { ...state };
      }

    case GET_USERS: {
      return {
        ...state,
        isUserCreated: false,
      };
    }
    default:
      return state;
  }
};

export default Users;
