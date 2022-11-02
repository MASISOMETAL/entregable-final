import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { Lenguage } from "../../constants/lenguage";
import { ModalCustom } from "../../components";

const Inicio = ({navigation}) =>{

    const RangeUser = useSelector((state)=> state.auth.userRange);

    //funcion lenguage
    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
    const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
    const mapping = filter.map((item)=> item.valor);
    const msg = mapping[0];

    const [isModalOn, setIsModalOn] = useState(false);

    const onHangleSeeUser = () =>{
        if (RangeUser == "Admin") {
            navigation.navigate("SeeUsersNav")
        }else setIsModalOn(!isModalOn)
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerDecoration}/>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>{msg.msgEscogeOpcion}</Text>
            </View>

            <ScrollView style={styles.containerScrollButton}>
            <View style={styles.containerButton}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=> navigation.navigate("SelecOptionNav")}
                >
                    <View style={styles.containerRowButton}>
                    <View style={styles.description}>
                        <Text style={styles.textOption}>{msg.msgIngresarVenta}</Text>
                        <Text style={styles.textDescription}>{msg.msgIngresarVentaDescr}</Text>
                    </View>
                    <View style={styles.icon}>
                        <Ionicons name="md-chevron-forward-outline" size={24} color="#fff" />
                    </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=> navigation.navigate("SellsNav")}
                >
                    <View style={styles.containerRowButton}>
                    <View style={styles.description}>
                        <Text style={styles.textOption}>{msg.msgVerVentas}</Text>
                        <Text style={styles.textDescription}>{msg.msgVerVentasDescr}</Text>
                    </View>
                    <View style={styles.icon}>
                        <Ionicons name="md-chevron-forward-outline" size={24} color="#fff" />
                    </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onHangleSeeUser}
                >
                <View style={styles.containerRowButton}>
                    <View style={styles.description}>
                        <Text style={styles.textOption}>{msg.msgVerUsuarios}</Text>
                        <Text style={styles.textDescription}>{msg.msgVerUsuariosDescr}</Text>
                    </View>
                    <View style={styles.icon}>
                        <Ionicons name="md-chevron-forward-outline" size={24} color="#fff" />
                    </View>
                    </View>
                </TouchableOpacity>
                </View>
            </ScrollView>
            <ModalCustom isModalOn={isModalOn} setIsModalOn={setIsModalOn} mensaje={msg.msgSinPermisosAdmin}/>
        </View>
    )
}

export default Inicio;