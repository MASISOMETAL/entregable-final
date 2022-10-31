import { insertSellsTypes } from "../types";

const {INSERT_SELLS, GET_SELLS} = insertSellsTypes;

const initialState = {
    info: [],
}

const InsertSellsReducor = (state = initialState, action) =>{
    switch (action.type) {
        case INSERT_SELLS:
            //console.log(action.nombreVendedor)
            return{
                info: [...state.info,{nombreVendedor: action.nombreVendedor, nombreCliente: action.nombreCliente,
                    fechaDeNacimiento: action.fechaDeNacimiento, DNI: action.DNI, calle: action.calle, numeroCel: action.numeroCel,
                    producto: action.producto, observaciones: action.observaciones}]
            }
        case GET_SELLS:
            console.log("reducer", action.info)
            return{
                info: action.info,
            }
        default:
            return state
    }
    
}

export default InsertSellsReducor;