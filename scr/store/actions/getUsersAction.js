import { GetUsersTypes } from "../types";
import { URL_API } from "../../constants/firebase";

const {GET_USERS} = GetUsersTypes

export const getUserAction = () =>{
    return async (dispatch) =>{
        try {
            const response = await fetch(`${URL_API}/registerDatos.json`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();

            const test = Object.keys(data).map( key => data[key] );
            //const filterName = test.filter(item => item.id === userId )

            //console.log("action:  ", test)

            dispatch({
                type: GET_USERS,
                users: test,
            });
        } catch (error) {
            console.log(error);
        }
    }
}