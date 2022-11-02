import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ProfileComponent } from "../../components";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { SelectLenguageAct } from "../../store/actions";
import { Lenguage } from "../../constants/lenguage";
import { Colors } from "../../constants/colors";


const Settings = () =>{

    const dispatch = useDispatch();
    const nombre = useSelector((state) => state.auth.userName);
    const range = useSelector((state) => state.auth.userRange);
    
    //funcion lenguage
    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
    const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
    const mapping = filter.map((item)=> item.valor);
    const msg = mapping[0];

    const onHandleLenguageSpanish = () =>{
        dispatch(SelectLenguageAct("ES"))
    }

    const onHandleLenguageEnglish = () =>{
        dispatch(SelectLenguageAct("EN"))
    }

    const onHandleModeNormal = () =>{
        dispatch(SelectModeAct("normal"))
    }

    const onHandleModeDark = () =>{
        dispatch(SelectModeAct("dark"))
    }

    return(
        <View style={styles.container}>
        <View style={styles.containerDecoration}/>
            <ProfileComponent nombre={nombre} range={range} />
            <View style={styles.containerOptionLenguage}>
                <View style={styles.containerRow}>
                    <Text>{msg.msgEscogeIdioma}</Text>
                    <View style={styles.containerconfigure}>
                    <View style={styles.containerButtonsRow}>
                        <TouchableOpacity 
                            style={lenguageSelect === "ES" ? styles.buttonSpanish : {...styles.buttonSpanish, backgroundColor: Colors.grey}}
                            onPress={onHandleLenguageSpanish}
                            disabled={lenguageSelect === "ES"}
                        >
                            <Text>Español</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={lenguageSelect === "EN" ? styles.buttonEnglish : {...styles.buttonEnglish, backgroundColor: Colors.grey}}
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
