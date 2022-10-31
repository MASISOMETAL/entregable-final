import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerDecoration:{
        width: width,
        height: height *0.04,
        backgroundColor: Colors.grey,
    },
    containerTitle:{
        alignItems: "center",
        //marginTop: 10,
        width: width,
        height: height * 0.06,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    textTitle:{
        fontSize: 16,
        fontFamily: "Inter-Bold",
    },

}) 