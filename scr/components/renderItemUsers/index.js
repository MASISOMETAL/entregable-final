import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Lenguage } from "../../constants/lenguage";
import { GiveAdminAction } from "../../store/actions/getUsersAction";
import ModalCustomSetAdmin from "../modalCustomSetAdmin";

const RenderItemUsers = ({item}) =>{

    //funcion lenguage
    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
    const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
    const mapping = filter.map((item)=> item.valor);
    const msg = mapping[0];

    const [isModalOn, setIsModalOn] = useState(false);
    const [mensage, setMensage] = useState("");

    const onHandleGiveRange = () =>{
        if (item.userRange == "Admin") {
            setMensage(msg.msgQuitarAdmin);
            setIsModalOn(!isModalOn)
        }else if (item.userRange == "User"){
            setMensage(msg.msgDarAdmin) ;
            setIsModalOn(!isModalOn)
        }
    }

    return(
        <TouchableOpacity style={styles.container} onPress={onHandleGiveRange}>
            <Text style={styles.textDescription}>{msg.msgNameUser}</Text>
            <Text style={styles.textInfo}>{item.nombre}</Text>
            <Text style={styles.textDescription}>{msg.msgRange}</Text>
            <Text style={styles.textInfo}>{item.userRange}</Text>
            <ModalCustomSetAdmin isModalOn={isModalOn} setIsModalOn={setIsModalOn} mensage={mensage} item={item} />
        </TouchableOpacity>
    )
}

export default RenderItemUsers;