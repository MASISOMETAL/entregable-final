import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AuthNav from "./authNav";
import Tab from "./tabs";
 

const AppNavigator = () =>{
    const userId = useSelector(state => state.auth.userId);
    return(
        <NavigationContainer>
            { userId ? <Tab /> : <AuthNav /> }
        </NavigationContainer>
    )//recordar sacar el ! del userId
}

export default AppNavigator;