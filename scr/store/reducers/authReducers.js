import { authTypes } from "../types";

const { SIGN_UP, SIGN_IN, LOG_OUT } = authTypes;

const initialState = {
    token: null,
    userId: null,
    userName: "",
    userRange: "",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                userName: action.userName,
                userRange: action.userRange
            }
        case SIGN_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                userName: action.userName,
                userRange: action.userRange,
            }
            case LOG_OUT:
                return {
                    ...state,
                    token: action.token,
                    userId: action.userId,
                    userName: action.userName,
                    userRange: action.userRange,
                }
        default:
            return state;
    }
}

export default authReducer;