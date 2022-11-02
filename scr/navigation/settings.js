import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/colors";
import { TouchableOpacity, Text } from "react-native";
import { Setting } from "../screens";
import { styles } from "./styles";
import { LogOutBoton } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../store/actions";
import { Lenguage } from "../constants/lenguage";

const Stack = createNativeStackNavigator();

const SettingsNav = () =>{

    const dispatch = useDispatch();
    
       //funcion lenguage
       const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
       const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
       const mapping = filter.map((item)=> item.valor);
       const msg = mapping[0];

    const onLogOut = () =>{
      dispatch(LogOut("", null, "", ""));
    };

    return(
    <Stack.Navigator initialRouteName="SettingsNav">
        <Stack.Screen 
            name="SettingsNav" 
            component={Setting} 
            options={{
                title: lenguageSelect === "ES" ? "Opciones" : "Settings",
                headerStyle: {
                    backgroundColor: Colors.primary,
                },
                headerTintColor: Colors.white,
                headerRight: () => (
                    <TouchableOpacity onPress={onLogOut}>
                        <Text style={styles.textBoton}>{msg.msgCerrarSesion}</Text>
                    </TouchableOpacity>
                )
            }}
        />
    </Stack.Navigator>
    )
}

export default SettingsNav;