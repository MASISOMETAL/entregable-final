import { GetUsersTypes } from "../types";

const {GET_USERS} = GetUsersTypes

const initialState = {
    allUsers: [],
}

const GetUsersReducers = (state = initialState, action) =>{
    switch (action.type) {
        case GET_USERS:
            //console.log("Reducer:  ", action.users)
            return{
                allUsers: action.users
            }
        default:
            return state 
    }
}

export default GetUsersReducers;