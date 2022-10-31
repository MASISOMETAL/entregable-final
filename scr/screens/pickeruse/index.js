import React, {useState} from "react";
import { useSelector } from "react-redux";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";

const Test = () =>{

    const info = useSelector((state)=> state.insertSellReducer.info)
    console.log(info)

    const RenderItem = ({item}) =>{
        <View style={styles.container}>
            <Text>{item.id}</Text>
        </View>
    }

    return(
        <FlatList 
            data={info}
            keyExtractor={(item) => item.id.toString()}
            renderItem={RenderItem}
        />
    )
}

export default Test;