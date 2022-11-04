import { GetUsersTypes } from "../types";
import { URL_API } from "../../constants/firebase";

const {GET_USERS, GIVE_ADMIN} = GetUsersTypes

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

            const users = Object.keys(data).map( key => data[key] );
            //const filterName = test.filter(item => item.id === userId )

            //console.log("action:  ", test)

            dispatch({
                type: GET_USERS,
                users: users,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const GiveAdminAction = (item) =>{
    return async (dispatch) =>{
        try {
            const response = await fetch(`${URL_API}/registerDatos.json`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();

            const users = Object.keys(data).map( key => data[key] );
            const filter = users.map( i => i.nombre)
            const searchIndex = filter.indexOf(item.nombre)
            //keyDatabase = key para usar con put
            const keyDatabase = Object.keys(data)[searchIndex];
            const usersValor = users[searchIndex];
            //console.log(usersValor.nombre)

            if (item.userRange == "User") {
                const response2 = await fetch(`${URL_API}/registerDatos/${keyDatabase}.json`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: usersValor.id,
                        nombre: usersValor.nombre,
                        userRange: "Admin",
                    })
                })
                /*dispatch({
                    type: GIVE_ADMIN,
                    id: usersValor.id,
                    userRange: "Admin",
                });*/
            } else {
                const response2 = await fetch(`${URL_API}/registerDatos/${keyDatabase}.json`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: usersValor.id,
                        nombre: usersValor.nombre,
                        userRange: "User",
                    })
                })
                dispatch(getUserAction());
            }
            

        } catch (error) {
            console.log(error);
        }
    }
}
