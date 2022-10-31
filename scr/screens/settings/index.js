import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ProfileComponent } from "../../components";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { SelectLenguageAct } from "../../store/actions";


const Settings = () =>{

    const dispatch = useDispatch();
    const nombre = useSelector((state) => state.auth.userName);
    const range = useSelector((state) => state.auth.userRange);
    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage)

    const msgEscogeIdioma = lenguageSelect === "ES" ? "Escoge Lenguage" : "Search Lenguage";

    const onHandleLenguageSpanish = () =>{
        dispatch(SelectLenguageAct("ES"))
    }

    const onHandleLenguageEnglish = () =>{
        dispatch(SelectLenguageAct("EN"))
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerDecoration}/>
            <ProfileComponent nombre={nombre} range={range} />
            <View style={styles.containerOptionLenguage}>
                <View style={styles.containerRow}>
                    <Text>{msgEscogeIdioma}</Text>
                    <View style={styles.containerconfigure}>
                    <View style={styles.containerButtonsRow}>
                        <TouchableOpacity 
                            style={lenguageSelect === "ES" ? styles.buttonSpanish : styles.buttonSpanish1 }
                            onPress={onHandleLenguageSpanish}
                            disabled={lenguageSelect === "ES"}
                        >
                            <Text>Spanish</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={lenguageSelect === "EN" ? styles.buttonEnglish : styles.buttonEnglish1 }
                            onPress={onHandleLenguageEnglish}
                            disabled={lenguageSelect === "EN"}
                        >
                            <Text>English</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Settings;
