import React, {useState, useReducer} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import CustomHead from "../../components/customHead";
import { styles } from "./styles";
import { signUp } from "../../store/actions";
import { UPDATED_FORM, onFocusOut, onInputChange } from "../../utils";


const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  repitPass: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
}

const formReducer = (state, action) => {
  switch (action.type) {
      case UPDATED_FORM: 
      const { name, value, hasError, error, touched, isFormValid} = action.data;
      return {
          ...state,
          [name]: {
              ...state[name],
              value,
              hasError,
              error,
              touched,
          },
          isFormValid
      }
      default:
          return state;
  }
};

const Register = ({navigation}) =>{

  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [registerDate, setRegisterDate] = useState("");
  const [repit, setRepit] = useState("");

  const Registrar = () =>{
    const { password, email } = formState;
    dispatch(signUp(email.value ,password.value, registerDate ));
  };

  const onHandleInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  const onHandleBlur = (value, type) => {
    onFocusOut(type, value, dispatchFormState, formState, repit);
}



  return(
    <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()} >
    <View style={styles.container}>
      <CustomHead/>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={{uri: "https://i.ibb.co/C0d0gfG/Movistar-Logo.png"}}
        />
      </View>
      <View style={styles.containerInput}>
      <TextInput 
            style={styles.input}
            //label="Email"
            placeholder="Ingrese su correo"
            value={formState.email.value}
            placeholderTextColor={"#00aae4"}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => onHandleInput(text, "email")}
            //onBlur={(e) => onHandleBlur(e.nativeEvent.text, "email")}
            onEndEditing={(e) => onHandleBlur(e.nativeEvent.text, "email")}
          />
            {formState.email.hasError && formState.email.touched && (
                <View style={styles.message}>
                    <Text style={styles.helperText}>{formState.email.error}</Text>
                </View>
            )}
          <TextInput 
            style={styles.input}
            //label="Password"
            placeholderTextColor={"#00aae4"}
            value={formState.password.value}
            placeholder="Ingrese su contraseña"
            //secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => {onHandleInput(text, "password"), setRepit(text)}}
            //onBlur={(e) => onHandleBlur(e.nativeEvent.text, "password")}
            onEndEditing={(e) => {onHandleBlur(e.nativeEvent.text, "password"); }}
          />
          {formState.password.hasError && formState.password.touched && (
                <View style={styles.message}>
                    <Text style={styles.helperText}>{formState.password.error}</Text>
                </View>
            )}
          <TextInput 
            style={styles.input}
            placeholderTextColor={"#00aae4"}
            value={formState.repitPass.value}
            placeholder="Repita la contraseña"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => onHandleInput(text, "repitPass")}
            onEndEditing={(e) => onHandleBlur(e.nativeEvent.text, "repitPass")}
            //value={passRepeat}
          />
          {formState.repitPass.hasError && formState.repitPass.touched && (
                <View style={styles.message}>
                    <Text style={styles.helperText}>{formState.repitPass.error}</Text>
                </View>
            )}
          <TextInput
            style={styles.input}
            placeholder="Ingrese nombre de usuario"
            placeholderTextColor={"#00aae4"}
            onChangeText={(text) => setRegisterDate(text)}
            value={registerDate}
          />
      </View>
      <View style={styles.containerBotonRegister}>
          <TouchableOpacity 
            style={styles.botonRegister}
            onPress={Registrar}
            >
            <Text style={styles.textBotonRegister}>Register</Text>
          </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Register;