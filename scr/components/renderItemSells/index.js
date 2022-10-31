import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const RenderItemSells = ({item}) =>{
    return(
        <View style={styles.container}>

                <Text style={styles.textDescription}>Nombre del Vendedor:</Text>
                <Text style={styles.textInfo}>{item.nombreVendedor}</Text>


                <Text style={styles.textDescription}>Nombre del Cliente:</Text>
                <Text style={styles.textInfo}>{item.nombreCliente}</Text>

                <Text style={styles.textDescription}>Fecha de Nacimiento:</Text>
                <Text style={styles.textInfo}>{item.fechaDeNacimiento}</Text>

                <Text style={styles.textDescription}>DNI:</Text>
                <Text style={styles.textInfo}>{item.DNI}</Text>

                <Text style={styles.textDescription}>Direaccion:</Text>
                <Text style={styles.textInfo}>{item.calle}</Text>

                <Text style={styles.textDescription}>Numero de contacto:</Text>
                <Text style={styles.textInfo}>{item.numeroCel}</Text>

                <Text style={styles.textDescription}>Producto Ofrecido:</Text>
                <Text style={styles.textInfo}>{item.producto}</Text>

                <Text style={styles.textDescription}>Observaciones:</Text>
                <Text style={styles.textInfo}>{item.observaciones}</Text>

        </View>
    )
}

export default RenderItemSells;