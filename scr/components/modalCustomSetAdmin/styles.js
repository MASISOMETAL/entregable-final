import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-end",
    },
    containerModal:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
        margin: 20,
        borderRadius: 16,
        paddingHorizontal: 30,
        paddingVertical: 10,
        shadowColor: Colors.white,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    containerText:{
        width: width * 0.75,
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottomColor: Colors.grey,
        borderBottomWidth: 2,
        
    },
    msgTextError:{
        fontSize: 16,
        fontFamily: "Inter-Bold",
    },
    containerBox:{
        marginTop: height * 0.015,
        justifyContent: "center",
        alignItems: "center",
    },
    containerbutton:{
        backgroundColor: Colors.primary,
        width: width * 0.08,
        height: width * 0.08,
        borderRadius: 5,
        marginVertical: height * 0.01,
        justifyContent: "center",
        alignItems: "center",
    },
    textClose:{
        fontFamily: "Inter-Bold",
        color: Colors.white,
    },
    containerRow:{
        marginTop: height * 0.01,
        flexDirection: "row",
        justifyContent: "space-around",
        width: width * 0.7,
    },
});