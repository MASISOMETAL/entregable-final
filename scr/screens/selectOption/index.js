import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { PickerProduct } from "../../components";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { insertSells } from "../../store/actions";

const SelectOptions = () =>{

    const userId = useSelector((state)=> state.auth.userId)
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        nombreVendedor: "", nombreCliente: "", fechaDeNacimiento: "", DNI: "", calle: "", numeroCel: "",
        producto: "", observaciones: "",
    });

    const onHandleSubmit = () =>{
        dispatch(insertSells(userId, inputs))
        setInputs({});
    };

    return(
        <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <View style={styles.containerDecoration}/>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>Complete los campos</Text>
            </View>
            <ScrollView>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>Nombre del vendedor</Text>
                        <TextInput 
                            style={styles.inputs}
                            placeholder=""
                            value={inputs.nombreVendedor}
                            onChangeText={(text)=> setInputs({...inputs, nombreVendedor: text})}
                            autoCapitalize="none"
                            autoCorrect={false}              
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>Nombre del cliente</Text>
                        <TextInput 
                            style={styles.inputs}
                            placeholder=""
                            value={inputs.nombreCliente}
                            onChangeText={(text)=> setInputs({...inputs, nombreCliente: text})}
                            autoCapitalize="none"
                            autoCorrect={false}              
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>Fecha de nacimiento</Text>
                        <TextInput 
                            style={styles.inputs}
                            placeholder="ejemplo xx/xx/xxxx"
                            value={inputs.fechaDeNacimiento}
                            onChangeText={(text)=> setInputs({...inputs, fechaDeNacimiento: text})}
                            autoCapitalize="none"
                            autoCorrect={false}              
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>DNI</Text>
                        <TextInput 
                            style={styles.inputs}
                            placeholder=""
                            value={inputs.DNI}
                            onChangeText={(text)=> setInputs({...inputs, DNI: text})}
                            autoCapitalize="none"
                            autoCorrect={false}              
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>Domicilio de instalacion</Text>
                        <TextInput 
                            style={styles.inputs}
                            placeholder=""
                            value={inputs.calle}
                            onChangeText={(text)=> setInputs({...inputs, calle: text})}
                            autoCapitalize="none"
                            autoCorrect={false}              
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>Numero de contacto</Text>
                        <TextInput 
                            style={styles.inputs}
                            placeholder="Sin +54"
                            value={inputs.numeroCel}
                            onChangeText={(text)=> setInputs({...inputs, numeroCel: text})}
                            autoCapitalize="none"
                            autoCorrect={false}              
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>Producto Ofrecido</Text>
                        <PickerProduct selectFirst={inputs} setSelectSecond={setInputs} />
                    </View>
                    
                    <View style={styles.containerInput}>
                        <Text style={styles.textDescription}>Observaciones</Text>
                        <TextInput 
                            style={styles.inputs}
                            placeholder=""
                            value={inputs.observaciones}
                            onChangeText={(text)=> setInputs({...inputs, observaciones: text})}
                            autoCapitalize="none"
                            autoCorrect={false}              
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={onHandleSubmit}
                        >
                            <Text style={styles.submit}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default SelectOptions;