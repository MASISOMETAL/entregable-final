import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons"

const Inicio = ({navigation}) =>{

    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage)
    const RangeUser = useSelector((state)=> state.auth.userRange);
    const msgEscogeOpcion = lenguageSelect === "ES" ? "Escoge una opcion" : "Search Option";
    const msgIngresarVenta = lenguageSelect === "ES" ? "Ingresar venta" : "Enter sale";
    const msgIngresarVentaDescr = lenguageSelect === "ES" ? "Seleccione para ingresar sus ventas" : "Select to enter your sales";
    const msgVerVentas = lenguageSelect === "ES" ? "Ver ventas" : "See sales";
    const msgVerVentasDescr = lenguageSelect === "ES" ? "Seleccione para ver las ventas realizadas" : "Select to see the sales made";
    const msgVerUsuarios = lenguageSelect === "ES" ? "Ver usuarios" : "View users";
    const msgVerUsuariosDescr = lenguageSelect === "ES" ? "Seleccione para ver los usuarios activos" : "Select to view active users";

    const onHangleSeeUser = () =>{
        if (RangeUser == "Admin") {
            navigation.navigate("SeeUsersNav")
        }else Alert.alert("No tiene los permisos de Admin")
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerDecoration}/>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>{msgEscogeOpcion}</Text>
            </View>

            <ScrollView style={styles.containerScrollButton}>
            <View style={styles.containerButton}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=> navigation.navigate("SelecOptionNav")}
                >
                    <View style={styles.containerRowButton}>
                    <View style={styles.description}>
                        <Text style={styles.textOption}>{msgIngresarVenta}</Text>
                        <Text style={styles.textDescription}>{msgIngresarVentaDescr}</Text>
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
                        <Text style={styles.textOption}>{msgVerVentas}</Text>
                        <Text style={styles.textDescription}>{msgVerVentasDescr}</Text>
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
                        <Text style={styles.textOption}>{msgVerUsuarios}</Text>
                        <Text style={styles.textDescription}>{msgVerUsuariosDescr}</Text>
                    </View>
                    <View style={styles.icon}>
                        <Ionicons name="md-chevron-forward-outline" size={24} color="#fff" />
                    </View>
                    </View>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Inicio;