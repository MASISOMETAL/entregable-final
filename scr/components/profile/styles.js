import { StyleSheet, Dimensions} from "react-native";
import { Colors } from "../../constants/colors";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        width: width,
        height: height * 0.13,
        //backgroundColor: Colors.green,
        justifyContent: "center",
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
    },
    containerRow:{
        flexDirection: "row",
    },
    containerImage:{
        marginLeft: width * 0.05,
        borderRadius: 100,
        borderColor: Colors.primary,
        borderWidth: 1,
    },
    image:{
        width: width * 0.2,
        height: width * 0.2,
        resizeMode: "cover",
        borderRadius: 100,
    },
    containerTextInfo:{
        flex: 1,
        marginLeft: width * 0.02,
        //backgroundColor: Colors.blue,
        justifyContent: "center",
    },
    textName:{
        fontSize: 20,
        marginLeft: 10,
    },
    textRange:{
        fontSize: 16,
        marginLeft: 10,
    },
})