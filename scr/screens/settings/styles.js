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
    containerOptionLenguage:{
        width: width,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 5,
    },
    containerRow:{
        flexDirection: "row",
        height: height * 0.04,
        width: width,
    },
    containerconfigure:{
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
        marginRight: 10,
    },
    containerButtonsRow:{
        flexDirection: "row",
        borderWidth: 1,
    },
    buttonSpanish:{
        backgroundColor: Colors.primary,
        padding: 3,
    },
    buttonSpanish1:{
        backgroundColor: Colors.grey,
        padding: 3,
    },
    buttonEnglish:{
        backgroundColor: Colors.primary,
        padding: 3,
    },
    buttonEnglish1:{
        backgroundColor: Colors.grey,
        padding: 3,
    },
    
})