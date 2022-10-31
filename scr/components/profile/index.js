import React, {useState, useEffect} from "react";
import * as ImagePicker from "expo-image-picker"
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { LoadImageProfile, ImageProfileSave } from "../../store/actions";


const ProfileComponent = ({nombre, range}) =>{

    const userId = useSelector((state)=> state.auth.userId)
    const profileImage = useSelector((state) => state.imgProfile.image)
    const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage)
    const [pickUrl, setPickUrl] = useState();
    const dispatch = useDispatch();

    const Range = lenguageSelect === "ES" ? "Rango: " : "Range: "

    /*useEffect(()=>{
        dispatch(LoadImageProfile(userId))
    },[dispatch])*/

    const verifyPermissions = async () =>{
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted"){
            Alert.alert("you need to grant camera permissions to use this app", [{ text: "Okay" }]);
            return false;
        }
        return true;
    };



    const onHandleTakePhoto = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) return;
    
        const image = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.5,
        });
        setPickUrl(image.uri);
        dispatch(ImageProfileSave(image.uri, userId));
    };


    return(
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <TouchableOpacity style={styles.containerImage} onPress={onHandleTakePhoto}>
                  <Image style={styles.image} source={{uri: profileImage}} />
                </TouchableOpacity>
                <View style={styles.containerTextInfo}>
                    <Text style={styles.textName}>{nombre}</Text> 
                    <Text style={styles.textRange}>{Range} {range}</Text> 
                </View>
            </View>
        </View>
    )
}

export default ProfileComponent;

//"https://i.ibb.co/qjWS478/perfil-empty.png"