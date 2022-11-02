import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { Lenguage } from "../../constants/lenguage";

const RenderItemUsers = ({item}) =>{

    //funcion lenguage
    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
    const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
    const mapping = filter.map((item)=> item.valor);
    const msg = mapping[0];

    return(
        <View style={styles.container}>
            <Text style={styles.textDescription}>{msg.msgNameUser}</Text>
            <Text style={styles.textInfo}>{item.nombre}</Text>
            <Text style={styles.textDescription}>{msg.msgRange}</Text>
            <Text style={styles.textInfo}>{item.userRange}</Text>
        </View>
    )
}

export default RenderItemUsers;