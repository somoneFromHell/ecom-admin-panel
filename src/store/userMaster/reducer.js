import { GET_FETCHED_USERS,ERROR_IN_FETCHING_USER_DATA} from "./actionTypes";

const initialState ={
    listOfUsers:[],
    error:"no error"
} 

const Users = (state = initialState,action)=>{
    switch(action.type){
        case GET_FETCHED_USERS:
            return{
                ...state,
                listOfUsers:action.payload
            }
        case ERROR_IN_FETCHING_USER_DATA:
        return{
            ...state,
            error:action.payload.error
        }
            default:
                return {...state};
    }
}

export default Users;