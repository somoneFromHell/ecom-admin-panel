import { GET_FETCHED_USERS ,ERROR_IN_FETCHING_USER_DATA} from "./actionTypes";

export const fatchUsers = (actiontype,data) =>({
    type:GET_FETCHED_USERS,
    payload:{actiontype,data}
})

export const fatchUsersError = (actiontype,data) =>({
    type:ERROR_IN_FETCHING_USER_DATA,
    payload:{actiontype,data}
})