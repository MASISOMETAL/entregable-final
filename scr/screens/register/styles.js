import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";


const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerImg:{
        alignItems: "center",
        marginTop: height * 0.005,
    },
    img:{
        width: width * 0.4,
        height: width * 0.4,
        resizeMode: "center",
    },
    containerInput:{
        alignItems: "center",
        marginTop: height * 0.01,
    },
    input:{
        borderBottomWidth: 1.8,
        borderBottomColor: Colors.primary,
        height: height * 0.05,
        width: width * 0.85,
        marginVertical: 6,
        fontSize: 16.
    },
    containerBotonRegister:{
        marginTop: height * 0.02,
        alignItems: "center",
    },
    botonRegister:{
        backgroundColor: Colors.primary,
        height: height * 0.05,
        width: width * 0.5,
        marginVertical: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    textBotonRegister:{
        color: "#fff",
        fontSize: 18,
        fontFamily: "Inter-Bold",
    },
    message: {
        marginVertical: 2,
    },
    helperText: {
        fontSize: 12,
        color: '#ff0000',
    }
})