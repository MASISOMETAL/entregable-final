import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: width * 0.9,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
    },
    picker:{
        //backgroundColor: Colors.primary,   
    },
}) 