import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { getUserAction } from "../../store/actions";
import { RenderItemUsers } from "../../components";

const SeeUsers = () =>{

    const dispatch = useDispatch();
    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage)
    const userId = useSelector((state)=> state.auth.userId)
    const infoUser = useSelector((state)=> state.GetUserRedu.allUsers)

    const users = lenguageSelect === "ES" ? "Usuarios" : "User";

    useEffect(()=>{
        dispatch(getUserAction())
    },[dispatch])

    const RenderItem = ({item}) => (
        <RenderItemUsers item={item} /> 
    )

    return(
        <View style={styles.container}>
            <View style={styles.containerDecoration}/>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>{users}</Text>
            </View>
            <FlatList 
                data={infoUser}
                keyExtractor={(item)=> item.nombre}
                renderItem={RenderItem}
            />
        </View>
    )
}

export default SeeUsers;