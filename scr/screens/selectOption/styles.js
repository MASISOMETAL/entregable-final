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
    containerInput:{
        alignItems: "center",
        marginTop: height * 0.01,
    },
    textDescription:{
        alignSelf: "flex-start",
        marginLeft: width - width * 0.94,
    },
    inputs:{
        width: width * 0.9,
        height: height * 0.05,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
    button:{
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.9,
        height: height * 0.05,
        borderRadius: 5,
        backgroundColor: Colors.primary,
        marginVertical: height * 0.02,
        marginBottom: 100,
    },
    submit:{
        color: Colors.white,
    },

})