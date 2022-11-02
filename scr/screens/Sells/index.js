import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { RenderItemSells } from "../../components";
import { GetSellsAction } from "../../store/actions";
import { Lenguage } from "../../constants/lenguage";

const Sells = () =>{

    const dispatch = useDispatch();
    const userId = useSelector((state)=> state.auth.userId)
    const info = useSelector((state)=> state.insertSellReducer.info)

        //funcion lenguage
        const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
        const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
        const mapping = filter.map((item)=> item.valor);
        const msg = mapping[0];
        

    useEffect(()=>{
        dispatch(GetSellsAction(userId))
    },[dispatch])

    const RenderItem = ({item}) => (
        <RenderItemSells item={item} />
    )

    return(
        <View style={styles.container}>
            <View style={styles.containerDecoration}/>
        <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>{msg.msgVentas}</Text>
        </View>
        <FlatList 
            data={info}
            keyExtractor={(item) => item.nombreCliente.toString()}
            renderItem={RenderItem}
        />
        </View>
    )
}

export default Sells;