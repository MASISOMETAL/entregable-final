import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const RenderItemUsers = ({item}) =>{

    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage)

    const msgNameUser = lenguageSelect === "ES" ? "Nombre de Usuario:" : "Username:";
    const msgRango = lenguageSelect === "ES" ? "Rango:" : "Range:";

    return(
        <View style={styles.container}>
            <Text style={styles.textDescription}>{msgNameUser}</Text>
            <Text style={styles.textInfo}>{item.nombre}</Text>
            <Text style={styles.textDescription}>{msgRango}</Text>
            <Text style={styles.textInfo}>{item.userRange}</Text>
        </View>
    )
}

export default RenderItemUsers;