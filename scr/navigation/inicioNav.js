import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";
import { Inicio, SelectOptions, Sells, SeeUsers } from "../screens";
import { Colors } from "../constants/colors";
import { styles } from "./styles";
import { LogOut } from "../store/actions";
import { useDispatch } from "react-redux";

const Stack = createNativeStackNavigator();

const InicioNav = () =>{

    const dispatch = useDispatch();

    const onLogOut = () =>{
      dispatch(LogOut("", null, "", ""));
    };

    return(
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen 
                name="Inicio" 
                component={Inicio} 
                options={{
                    title: "Movistar",
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.white,
                    headerRight: () => (
                        <TouchableOpacity onPress={onLogOut}>
                            <Text style={styles.textBoton}>Logout</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen 
                name="SelecOptionNav" 
                component={SelectOptions} 
                options={{
                    title: "Movistar",
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.white,
                    headerRight: () => (
                        <TouchableOpacity onPress={onLogOut}>
                            <Text style={styles.textBoton}>Logout</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen 
                name="SellsNav" 
                component={Sells} 
                options={{
                    title: "Movistar",
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.white,
                    headerRight: () => (
                        <TouchableOpacity onPress={onLogOut}>
                            <Text style={styles.textBoton}>Logout</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen 
                name="SeeUsersNav" 
                component={SeeUsers} 
                options={{
                    title: "Movistar",
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.white,
                    headerRight: () => (
                        <TouchableOpacity onPress={onLogOut}>
                            <Text style={styles.textBoton}>Logout</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default InicioNav;
