import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP, URL_API } from "../../constants/firebase";
import { authTypes } from "../types";
import { Alert } from "react-native";

const { SIGN_UP, SIGN_IN, LOG_OUT } = authTypes;

export const signUp = (email, password, userName) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGN_UP, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            });

            if (!response.ok) {
                throw new Error('Algo salió mal');
            }

            const data = await response.json();

            const response2 = await fetch(`${URL_API}/registerDatos.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: data.localId,
                    nombre: userName,
                    userRange: "User",
                })
            })

            dispatch({
                type: SIGN_UP,
                userName: userName,
                token: data.idToken,
                userId: data.localId,
                userRange: "User",
            });

        } catch (error) {
            console.log(error);
        }
    }
};

export const signIn = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGN_IN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            });

            const data = await response.json();

            
            if (!data.error) {
            }else Alert.alert("El mail o la contraseña son erroneos")
            

            const response2 = await fetch(`${URL_API}/registerDatos.json`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const dataGet = await response2.json();

            const mapName = Object.keys(dataGet).map( key => dataGet[key] );
            const filterName = mapName.filter(item => item.id === data.localId )
            const userName = filterName.map(item => item.nombre);

            const mapRange = Object.keys(dataGet).map( key => dataGet[key] );
            const filterRange = mapRange.filter(item => item.id === data.localId )
            const userRange = filterRange.map(item => item.userRange);


            dispatch({
                type: SIGN_IN,
                token: data.idToken,
                userId: data.localId,
                userName: userName,
                userRange: userRange,
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export const LogOut = ({token, userId, userName, userRange}) =>({
    type: LOG_OUT,
    token,
    userId,
    userName,
    userRange,
})

