import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Lenguage } from "../../constants/lenguage";
import { useSelector, useDispatch } from "react-redux";
import { GiveAdminAction } from "../../store/actions/getUsersAction";

const ModalCustomSetAdmin = ({isModalOn, setIsModalOn, mensage, item}) =>{

    const dispatch = useDispatch();
        //funcion lenguage
        const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
        const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
        const mapping = filter.map((item)=> item.valor);
        const msg = mapping[0];

    const GiveAdmin = () =>{
        dispatch(GiveAdminAction(item));
        setIsModalOn(!isModalOn)
    }

    return(
        <>
            <Modal  visible={isModalOn} transparent={true}>
                <View style={styles.container}>
                    <View style={styles.containerModal}>
                    <View style={styles.containerText}>
                        <Text style={styles.msgTextError}>{msg.msgError}</Text>
                    </View>
                        <View style={styles.containerBox}>
                            <Text>{mensage}{item.nombre}</Text>
                            <View style={styles.containerRow}>
                                <TouchableOpacity style={styles.containerbutton} onPress={() => setIsModalOn(!isModalOn)}>
                                    <Text style={styles.textClose}>X</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.containerbutton} onPress={GiveAdmin}>
                                    <Text style={styles.textClose}>✔</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default ModalCustomSetAdmin;
