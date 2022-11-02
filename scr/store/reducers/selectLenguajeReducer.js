import { SelectLenguage } from "../types";

const { SELECT_LENGUAGE} = SelectLenguage;

const initialState = {
    Lenguage: "ES",
}

const SelectLenguageReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SELECT_LENGUAGE: 
            return {
                Lenguage: action.Lenguage
            }
        default:
            return state
    }
    
}

export default SelectLenguageReducer;