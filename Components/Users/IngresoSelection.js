import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SignInConfirm, SignUpConfirm } from '../../store/Actions/ingreso.action';

import { ESTILOS } from '../../Constants/Estilos';
import {Picker} from '@react-native-picker/picker';
import { addUser } from '../../store/Actions/user.action';
import { useDispatch } from 'react-redux';

export default function IngresoSelection({route}){

const { action } = route.params;
  //Input
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inpuProfession, setInputProfession] = useState("");
  const [selectedValuePreferences, setSelectedValuePreferences] = useState("");
  
  
//ChangeInput
  const handleChangeEmail = (value) =>{
    setInputEmail(value);
  };
  const handleChangeName = (value) =>{
    setInputName(value);
  };
  const handleChangeLastName = (value) =>{
    setInputLastName(value);
  };       
  const handleChangePassword = (value) =>{
    setInputPassword(value);
  };   
  const handleChangeProfession = (value) =>{
    setInputProfession(value);
  }; 

  //dispatch
const dispatch = useDispatch();
//confirm user
const handleSignUp = ()=>{
  let newUser = {
  image: "notimageYet",
  name:inputName,
  lastname:inputLastName,
  email:inputEmail,
  profession:inpuProfession,
  preference: selectedValuePreferences, 
  createdAt: new Date()
  }; 
  dispatch(addUser(newUser));
  dispatch(SignUpConfirm(inputEmail,inputPassword)); 
};

//Confirm user already registered
const handleSignIn = () =>{
  dispatch(SignInConfirm(inputEmail,inputPassword)); 
};

//Sign in
function SignIn(){
     return(
       <KeyboardAvoidingView style={{justifyContent:"space-evenly"}}>
       <View style={styles.inputContainer}>
         <Text style={styles.inputText}>
        Email
        </Text>
        <TextInput 
        placeholder="Ingrese email..." 
        value={inputEmail}
        onChangeText={handleChangeEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"        />
       </View>
       <View style={styles.inputContainer}>
         <Text style={styles.inputText}> 
        Contraseña
        </Text>
        <TextInput 
        placeholder="Ingrese contraseña..." 
        onChangeText={handleChangePassword}
        value={inputPassword}
        style={styles.input}
        secureTextEntry
        autoCapitalize="none"
                /> 
       </View>
       <View style={{paddingTop:"5%" }}>
          <TouchableOpacity style={ESTILOS.button} onPress={handleSignIn}>
          <Text style={{fontSize:16}}>INGRESAR</Text>
          </TouchableOpacity>
      </View>
       </KeyboardAvoidingView>
     )
  };
  
  //sign up
  function SignUp(){
 return (
        <KeyboardAvoidingView style={{justifyContent:"space-evenly"}}>
        <View style={styles.inputContainer}>
         <Text style={styles.inputText}>
        Nombre
        </Text>
        <TextInput placeholder="Ingrese el nombre..." 
        onChangeText={handleChangeName}
        value={inputName}
        style={styles.input}
        autoCapitalize="sentences"
        />
       </View>
       <View style={styles.inputContainer}>
         <Text style={styles.inputText}>
        Apellido
        </Text>
        <TextInput placeholder="Ingrese el apellido..." 
        onChangeText={handleChangeLastName}
        value={inputLastName}
        style={styles.input} 
        autoCapitalize="sentences"
        />
       </View>
       <View style={styles.inputContainer}>
         <Text style={styles.inputText}>
        Email
        </Text>
        <TextInput 
        placeholder="Ingrese email..." 
        onChangeText={handleChangeEmail}
        value={inputEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"        />
       </View>
       <View style={styles.inputContainer}>
         <Text style={styles.inputText}> 
        Contraseña
        </Text>
        <TextInput 
        placeholder="Ingrese contraseña..." 
        onChangeText={handleChangePassword}
        value={inputPassword}
        style={styles.input}
        secureTextEntry
        autoCapitalize="none"
                /> 
       </View>
       <View style={styles.inputContainer}>
         <Text style={styles.inputText}>
        Profesión
        </Text>
        <TextInput 
        placeholder="Ingrese profesión..." 
        onChangeText={handleChangeProfession}
        value={inpuProfession}
        style={styles.input}
        />
       </View>
       <View style={styles.inputContainer}>
         <Text style={styles.inputText}>
        Preferencias:
        </Text>
        <Picker
        style={{borderColor: "#7991b8", borderWidth: 1,borderStyle: "dashed",borderRadius: 60}}
        selectedValue={selectedValuePreferences}
        onValueChange={(itemValue, itemIndex) => setSelectedValuePreferences(itemValue)}
      >
        <Picker.Item label="Marketing" value="marketing" />
        <Picker.Item label="Programación" value="programacion" />
        <Picker.Item label="Finanzas" value="finanzas" />
        <Picker.Item label="Ciencia" value="ciencia" />
        <Picker.Item label="Diseño" value="diseño" />
        <Picker.Item label="RRHH" value="rrhh" />
      </Picker>
       </View> 
       <View style={{paddingTop:"5%" }}>
          <TouchableOpacity style={ESTILOS.button} onPress={handleSignUp}>
          <Text style={{fontSize:16}}>INGRESAR</Text>
          </TouchableOpacity>
          </View>
    </KeyboardAvoidingView>  
    
    )
    };
  
    // google
 function SignInWithGoogle(){
      return(
        <View>
          <Text>
            Hola google
          </Text>
          <View style={{paddingTop:"5%" }}>
          <TouchableOpacity style={ESTILOS.button} onPress={handleSignUp}>
          <Text style={{fontSize:16}}>INGRESAR</Text>
          </TouchableOpacity>
          </View>
        </View>
      )
    };


//iterador entre pantallas=> prop: action    
function Iterador(){
  switch(action){ 
    case "SignIn":
      return SignIn();
    case "SignUp":
      return SignUp();
    case "SignInWithGoogle":
      return SignInWithGoogle();
    default:
      return SignIn();
  }
}; 

//retorno render
    return (
      <SafeAreaView style={{backgroundColor: "white"}}>
      <ScrollView style={styles.scrollView}>
          {Iterador()}
        </ScrollView>
    </SafeAreaView>
    )
};


const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
  },
    inputContainer:{
      padding: "3%", 
      borderRadius:15,
      backgroundColor:"white"
    },
      input: {
        color: "grey",
        maxWidth: "100%",
        fontSize: 18,
        borderColor: "#7991b8",
        borderBottomWidth: 2,
      },
      inputText:{
        paddingBottom:"2%",
      },
  });











//   return (
//         <View>
//           <FadeInView style={{width: 250, height: 50}}>
//         <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Hola</Text>
//       </FadeInView>
//         </View>
//     )
// };


// const FadeInView = (props) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current  

//   React.useEffect(() => {
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: 1,
//         duration: 10000,
//       }
//     ).start();
//   }, [fadeAnim])

//   return (
//     <Animated.View                
//       style={{
//         ...props.style,
//         opacity: fadeAnim,        
//       }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// }





    