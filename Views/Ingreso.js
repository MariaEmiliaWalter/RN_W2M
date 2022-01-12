import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ESTILOS } from '../Constants/Estilos';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Ingreso = ()=> {
 
const navigation = useNavigation(); 

    return (
    <View style={styles.ingresoView}>
         <TouchableOpacity style={{...ESTILOS.button, marginTop:20 }} 
      onPress={()=> navigation.navigate("ingresoSelection", {action: "SignUp"})}>
      <Text style={{color:"#ffffff"}}>¿Todavía no tenes cuenta?</Text>  
      </TouchableOpacity>   
   
       <TouchableOpacity style={{...ESTILOS.button, marginTop:20 }}
        onPress={()=> navigation.navigate("ingresoSelection", {action:"SignIn"} )}
      >     
        <Text style={{color:"#ffffff"}}>Ya estoy registrado</Text>         
        </TouchableOpacity>
       
      <TouchableOpacity style={{...ESTILOS.button, marginTop:20 }} 
      onPress={()=> navigation.navigate("ingresoSelection", {action: "SignInWithGoogle"})}>
      <Text style={{color:"#ffffff"}}>Ingresar con Google</Text>         
      </TouchableOpacity> 


        </View>

  )      
};

export default Ingreso;




const styles = StyleSheet.create({
       ingresoView:{
         //alignContent:"center",
         justifyContent:"center", 
        //paddingTop: "20%",
        paddingBottom:"30%",
        backgroundColor: "#084764",
        height: "100%",
       },
});