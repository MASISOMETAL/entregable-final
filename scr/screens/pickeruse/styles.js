import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { widht, heigth } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    picker:{
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 5,
        backgroundColor: Colors.primary,   
    },
}) 