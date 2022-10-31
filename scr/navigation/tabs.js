import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import InicioNav from "./inicioNav";
import SettingsNav from "./settings";
import { Colors } from "../constants/colors";

const BottomTab = createBottomTabNavigator();

const Tab = () =>{
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
                    title: "Inicio",
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
                    title: "Settings",
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
