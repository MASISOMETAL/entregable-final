import React, {useState, useReducer, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Image, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { ModalCustom, CustomHead } from "../../components";
import { styles } from "./styles";
import { signIn } from "../../store/actions";
import { UPDATED_FORM, onFocusOut, onInputChange } from "../../utils";
import { LoadLenguageAct} from "../../store/actions";
import { Lenguage } from "../../constants/lenguage";
import { LoadImageProfile } from "../../store/actions";


const initialState = {
  email: { value: '', error: '', touched: false, hasError: true },
  password: { value: '', error: '', touched: false, hasError: true },
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



const Login = ({navigation}) =>{

  useEffect(()=>{
    dispatch(LoadImageProfile())
    dispatch(LoadLenguageAct())
  },[])

  const lenguageSelect = useSelector((state)=> state.LenguageReducer.Lenguage);
  const filter = Lenguage.filter((item) => item.id === lenguageSelect) ;
  const mapping = filter.map((item)=> item.valor);
  const msg = mapping[0];

  const [isModalOn, setIsModalOn] = useState(false);
  
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const onHandleIniciarSesion = () =>{
    const { password, email } = formState;
    dispatch(signIn(email.value ,password.value, isModalOn, setIsModalOn ));
  };

  const onHandleInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  const onHandleBlur = (value, type) => {
    onFocusOut(type, value, dispatchFormState, formState)
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
      <View style={styles.containerinput}>
          <TextInput 
            style={styles.input}
            label="Email"
            placeholder={msg.msgIngreseCorreo}
            value={formState.email.value}
            placeholderTextColor={"#00aae4"}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => onHandleInput(text, "email")}
            //onBlur={(e) => onHandleBlur(e.nativeEvent.text, 'email')}
            hasError={formState.email.hasError}
            error={formState.email.error}
            touched={formState.email.touched}
          />
          <TextInput 
            style={styles.input}
            label="Password"
            placeholderTextColor={"#00aae4"}
            value={formState.password.value}
            placeholder={msg.msgIngresePass}
            //secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => onHandleInput(text, "password")}
            //onBlur={(e) => onHandleBlur(e.nativeEvent.text, 'password')}
            hasError={formState.password.hasError}
            error={formState.password.error}
            touched={formState.password.touched}
          />
      </View>
      <View style={styles.containerBoton}>
          <TouchableOpacity 
            style={styles.botonSesion}
            onPress={onHandleIniciarSesion}
            >
            <Text style={styles.textBotonSesion}>{msg.msgInicioSesion}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.botonRegister}
            onPress={() => navigation.navigate("Register")}
            >
            <Text style={styles.textBotonRegister}>{msg.msgRegistrate}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.botonOlvideContraseña}
            onPress={() => alert("Jodete por gil")}
            >
            <Text style={styles.textOlvideContraseña}>{msg.msgOlvidePass}</Text>
          </TouchableOpacity>
      </View>
      <ModalCustom isModalOn={isModalOn} setIsModalOn={setIsModalOn} mensaje={msg.msgCorreoIncorrecto}/>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Login;