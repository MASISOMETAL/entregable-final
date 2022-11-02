import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { PickerProduct } from "../../components";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { insertSells } from "../../store/actions";
import { Lenguage } from "../../constants/lenguage";

const SelectOptions = () =>{

    
    const userId = useSelector((state)=> state.auth.userId)
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        nombreVendedor: "", nombreCliente: "", fechaDeNacimiento: "", DNI: "", calle: "", numeroCel: "",
        producto: "", observaciones: "",
    });

        //funcion lenguage
        const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
        const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
        const mapping = filter.map((item)=> item.valor);
        const msg = mapping[0];

    const [textInputFocus, setTextInputFocus] = useState(0)

    const onHandleSubmit = () =>{
        if (!inputs.nombreVendedor || !inputs.nombreCliente || !inputs.fechaDeNacimiento || !inputs.DNI || !inputs.calle || !inputs.numeroCel || !inputs.producto ) {
            Alert.alert("Complete todos los campos")
        } else {
            dispatch(insertSells(userId, inputs))
            setInputs({});
            Alert.alert("Los datos han sido enviado correctamente")
        }
        
    };

    console.log(textInputFocus)

    return(
        <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <View style={styles.containerDecoration}/>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>{msg.msgCompleteloscampos}</Text>
            </View>
            <ScrollView>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgNombreVendedor}</Text>
                        <TextInput 
                            style={textInputFocus === 1 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder=""
                            maxLength={40}
                            value={inputs.nombreVendedor}
                            onChangeText={(text)=> setInputs({...inputs, nombreVendedor: text})}
                            autoCapitalize="none"
                            autoCorrect={false}  
                            onFocus={()=> setTextInputFocus(1)}
                            onEndEditing={()=> setTextInputFocus(0)}            
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgNombreCliente}</Text>
                        <TextInput 
                            style={textInputFocus === 2 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder=""
                            maxLength={40}
                            value={inputs.nombreCliente}
                            onChangeText={(text)=> setInputs({...inputs, nombreCliente: text})}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onFocus={()=> setTextInputFocus(2)}
                            onEndEditing={()=> setTextInputFocus(0)}              
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgFechaDeNac}</Text>
                        <TextInput 
                            style={textInputFocus === 3 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder="ejemplo xx/xx/xxxx"
                            maxLength={11}
                            value={inputs.fechaDeNacimiento}
                            onChangeText={(text)=> setInputs({...inputs, fechaDeNacimiento: text})}
                            autoCapitalize="none"
                            autoCorrect={false}  
                            onFocus={()=> setTextInputFocus(3)}
                            onEndEditing={()=> setTextInputFocus(0)}            
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgDNI}</Text>
                        <TextInput 
                            style={textInputFocus === 4 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder=""
                            maxLength={9}
                            keyboardType="numeric"
                            value={inputs.DNI}
                            onChangeText={(text)=> setInputs({...inputs, DNI: text})}
                            autoCapitalize="none"
                            autoCorrect={false}    
                            onFocus={()=> setTextInputFocus(4)}
                            onEndEditing={()=> setTextInputFocus(0)}          
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgCalle}</Text>
                        <TextInput 
                            style={textInputFocus === 5 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder=""
                            value={inputs.calle}
                            onChangeText={(text)=> setInputs({...inputs, calle: text})}
                            autoCapitalize="none"
                            autoCorrect={false}    
                            onFocus={()=> setTextInputFocus(5)}
                            onEndEditing={()=> setTextInputFocus(0)}          
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgNumeroCel}</Text>
                        <TextInput 
                           style={textInputFocus === 6 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder="Sin +54"
                            maxLength={20}
                            value={inputs.numeroCel}
                            onChangeText={(text)=> setInputs({...inputs, numeroCel: text})}
                            autoCapitalize="none"
                            autoCorrect={false}     
                            onFocus={()=> setTextInputFocus(6)}
                            onEndEditing={()=> setTextInputFocus(0)}         
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgProducto}</Text>
                        <PickerProduct selectFirst={inputs} setSelectSecond={setInputs} />
                    </View>
                    
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>{msg.msgObser}</Text>
                        <TextInput 
                            style={textInputFocus === 7 ? {...styles.inputs, borderColor: "#ff8000"} : styles.inputs}
                            placeholder=""
                            value={inputs.observaciones}
                            onChangeText={(text)=> setInputs({...inputs, observaciones: text})}
                            autoCapitalize="none"
                            autoCorrect={false}       
                            onFocus={()=> setTextInputFocus(7)}
                            onEndEditing={()=> setTextInputFocus(0)}       
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={onHandleSubmit}
                        >
                            <Text style={styles.submit}>{msg.msgSubmit}</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default SelectOptions;