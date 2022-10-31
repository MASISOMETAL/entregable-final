import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { GetUsersReducers,authReducer, ImageProfileReducer, InsertSellsReducor, SelectLenguageReducer } from "./reducers";

const rootReducer = combineReducers({
    auth: authReducer,
    imgProfile: ImageProfileReducer,
    insertSellReducer: InsertSellsReducor,
    LenguageReducer: SelectLenguageReducer,
    GetUserRedu: GetUsersReducers,
});

export default createStore(rootReducer, applyMiddleware(thunk));