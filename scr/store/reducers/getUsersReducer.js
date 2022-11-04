import { GetUsersTypes } from "../types";

const {GET_USERS, GIVE_ADMIN} = GetUsersTypes

const initialState = {
    allUsers: [],
}

const GetUsersReducers = (state = initialState, action) =>{
    switch (action.type) {
        case GET_USERS:
            return{
                allUsers: action.users,
            }
        default:
            return state 
    }
}

export default GetUsersReducers;