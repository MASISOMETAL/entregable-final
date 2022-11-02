import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerdark:{
        flex: 1,
        backgroundColor: Colors.black,
    },
    containerImg:{
        alignItems: "center",
        marginTop: height * 0.05,
    },
    img:{
        width: width * 0.4,
        height: width * 0.4,
        resizeMode: "center",
    },
    containerinput:{
        alignItems: "center",
        marginTop: height * 0.05,
    },
    input:{
        borderBottomWidth: 1.8,
        borderBottomColor: Colors.primary,
        height: height * 0.05,
        width: width * 0.85,
        marginVertical: 9,
        //color: Colors.primary,
        fontSize: 16.
    },
    containerBoton:{
        alignItems: "center",
        marginTop: height * 0.04,
    },
    botonSesion:{
        backgroundColor: Colors.primary,
        height: height * 0.05,
        width: width * 0.5,
        marginVertical: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    botonRegister:{
        borderColor: Colors.primary,
        borderWidth: 2,
        height: height * 0.05,
        width: width * 0.5,
        marginVertical: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    textBotonSesion:{
        color: "#fff",
        fontSize: 18,
        fontFamily: "Inter-Bold",
    },
    textBotonRegister:{
        color: Colors.primary,
        fontSize: 18,
        fontFamily: "Inter-Bold",
    },
    botonOlvideContraseña:{
        marginTop: 5,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
    },
    textOlvideContraseña:{
        color: Colors.primary,
        fontSize: 14,
        fontFamily: "Inter-Regular",
    },
})