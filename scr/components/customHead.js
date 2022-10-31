import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../constants/colors";

const { height, width} = Dimensions.get("window");

const CustomHead = () =>{

    return(
        <View style={style.container}>
            <Text style={style.textHead}>Movistar</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width: width,
        height: height * 0.06,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    textHead:{
        color: "#fff",
        fontSize: 24,
        fontFamily: "Inter-Bold",
    },
})

export default CustomHead;