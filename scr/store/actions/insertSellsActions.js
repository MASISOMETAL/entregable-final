import { insertSellsTypes } from "../types";
import { URL_API } from "../../constants/firebase";

const {INSERT_SELLS,GET_SELLS} = insertSellsTypes;

export const insertSells = (userId, input) =>{
    return async (dispatch) =>{
        try {
            const response = await fetch(`${URL_API}/Sells.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: userId,
                    nombreVendedor: input.nombreVendedor,
                    nombreCliente: input.nombreCliente,
                    fechaDeNacimiento: input.fechaDeNacimiento,
                    DNI: input.DNI,
                    calle: input.calle,
                    numeroCel: input.numeroCel,
                    producto: input.producto,
                    observaciones: input.observaciones,
                })
            })
            dispatch({
                type: INSERT_SELLS,
                nombreVendedor: input.nombreVendedor,
                nombreCliente: input.nombreCliente,
                fechaDeNacimiento: input.fechaDeNacimiento,
                DNI: input.DNI,
                calle: input.calle,
                numeroCel: input.numeroCel,
                producto: input.producto,
                observaciones: input.observaciones,
            });

        } catch (error) {
            console.log(error);
        }
    }
}

export const GetSellsAction = (userId) =>{
    return async (dispatch) =>{
        try {
            const response = await fetch(`${URL_API}/Sells.json`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();

            const test = Object.keys(data).map( key => data[key] );
            const filterName = test.filter(item => item.id === userId )

            //console.log("action:  ", filterName)

            dispatch({
                type: GET_SELLS,
                info: filterName,
            });
        } catch (error) {
            console.log(error);
        }
    }
}
