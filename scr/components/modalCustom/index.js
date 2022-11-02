import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Lenguage } from "../../constants/lenguage";
import { useSelector } from "react-redux";

const ModalCustom = ({isModalOn, setIsModalOn, mensaje}) =>{

        //funcion lenguage
        const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
        const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
        const mapping = filter.map((item)=> item.valor);
        const msg = mapping[0];

    return(
        <>
            <Modal  visible={isModalOn} transparent={true}>
                <View style={styles.container}>
                    <View style={styles.containerModal}>
                    <View style={styles.containerText}>
                        <Text style={styles.msgTextError}>{msg.msgError}</Text>
                    </View>
                        <View style={styles.containerBox}>
                            <Text>{mensaje}</Text>
                            <TouchableOpacity style={styles.containerbutton} onPress={() => setIsModalOn(!isModalOn)}>
                                <Text style={styles.textClose}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default ModalCustom;
