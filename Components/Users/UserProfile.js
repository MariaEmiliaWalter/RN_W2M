import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import { getProfileUser, updateUserPhoto } from '../../store/Actions/user.action';

import { ESTILOS } from '../../Constants/Estilos';
import ImageSelector from "../ImageSelector"
import { logOut } from '../../store/Actions/ingreso.action';
import { useDispatch } from 'react-redux';

export default function UserProfile() {
const dispatch = useDispatch();
const [image, setImage] = useState("");

const data = () =>{ 
useEffect(() => {
dispatch(getProfileUser());
}, []);
};

const dataUser = data();
console.log(dataUser);


const handlePickImage = (image) => {
  setImage(image)
};

const handleSave =() =>{
  dispatch(updateUserPhoto(image));
};


return (
        <View style={{alignSelf:"center",flex:1, }}>
        <ImageSelector onImage={handlePickImage}/>
<FlatList
        style={{alignSelf:"center"}}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
           <View style={styles.cardContainer}>
            <Text> {data.item.email} </Text>
            <Text> {data.item.createdAt} </Text>
            </View>
        )}
      />
      <View style={{flex:1, justifyContent:"space-between", alignSelf:"center", flexDirection:"row"}}>
         <TouchableOpacity 
            onPress={handleSave}
      style={{...ESTILOS.button, marginTop:20 }}
       >
      <Text style={{color:"#ffffff"}}>Guardar cambios</Text>         
      </TouchableOpacity>
    <TouchableOpacity 
     onPress={() => dispatch(logOut())}
      style={{...ESTILOS.button, marginTop:20 }}>
      <Text style={{color:"#ffffff"}}>Cerrar sesión</Text>         
      </TouchableOpacity>
      </View>

        </View>
    )
};

const styles = StyleSheet.create({
    containerPhoto:{
        paddingTop:"5%",
        alignSelf:"center",
        flexDirection:"column",
        justifyContent:"center",
    },
    image:{
        borderRadius: 80,
         backgroundColor:"grey",
          width:150,
          height:150 
    },
    iconImage:{
        position:'absolute',
        alignSelf:"center",
        opacity: 0.5  
    },
     cardContainer:{
        width: 300,
        maxWidth: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:"white",
        borderRadius:15,
        padding: 10,
        marginBottom: 15,
        borderColor: "orange",
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      
        elevation: 5,
      }, 
});
