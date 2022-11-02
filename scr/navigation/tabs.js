import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import InicioNav from "./inicioNav";
import SettingsNav from "./settings";
import { Colors } from "../constants/colors";
import { useSelector } from "react-redux";
import { Lenguage } from "../constants/lenguage";

const BottomTab = createBottomTabNavigator();

const Tab = () =>{

    //funcion lenguage
    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
    const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
    const mapping = filter.map((item)=> item.valor);
    const msg = mapping[0];

    const msgInicio = msg.msgInicio;
    const msgConfig = msg.msgConfig;


    return(
        <BottomTab.Navigator 
            initialRouteName="InicioNav"
            screenOptions={{
                headerShown: false,
            }}    
        >
            <BottomTab.Screen 
                name="InicioNav" 
                component={InicioNav} 
                options={{
                    title: msgInicio,
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={22}
                            color={Colors.primary}  
                        />
                    )
                }}
            />
            <BottomTab.Screen 
                name="Setting" 
                component={SettingsNav} 
                options={{
                    title: msgConfig,
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? "settings" : "settings-outline"}
                            size={22}
                            color={Colors.primary}  
                        />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}

export default Tab;
