import React, {useState} from "react";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import { View } from "react-native";

const PickerProduct = ({selectFirst, setSelectSecond}) =>{
    return(
        <View style={styles.container}>
            <Picker
                mode="dropdown"
                style={styles.picker}
                selectedValue={selectFirst.producto}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectSecond({...selectFirst, producto: itemValue})}
            >
                <Picker.Item  label="Seleccione una..." value="Seleccione una..." enabled={false} />
                <Picker.Item  label="300Mb Fibra Optica" value="300Mb Fibra Optica" />
                <Picker.Item  label="500Mb Fibra Optica" value="500Mb Fibra Optica" />
                <Picker.Item  label="1000Mb Fibra Optica" value="1000Mb Fibra Optica" />
                <Picker.Item  label="300Mb Fibra Optica + TV Digital" value="300Mb Fibra Optica + TV Digital" />
                <Picker.Item  label="500Mb Fibra Optica + TV Digital" value="500Mb Fibra Optica + TV Digital" />
                <Picker.Item  label="1000Mb Fibra Optica + TV Digital" value="1000Mb Fibra Optica + TV Digital" />
                <Picker.Item  label="300Mb Fibra Optica + TV Max" value="300Mb Fibra Optica + TV Max" />
                <Picker.Item  label="500Mb Fibra Optica + TV Max" value="500Mb Fibra Optica + TV Max" />
                <Picker.Item  label="1000Mb Fibra Optica + TV Max" value="1000Mb Fibra Optica + TV Max" />
                <Picker.Item  label="Portabilidad Prepago a Abono" value="Portabilidad Prepago a Abono" />
                <Picker.Item  label="Portabilidad Abono a Abono" value="Portabilidad Abono a Abono" />
                <Picker.Item  label="Alta nueva celular" value="Alta nueva celular" />
            </Picker>
        </View>
    );
};

export default PickerProduct;