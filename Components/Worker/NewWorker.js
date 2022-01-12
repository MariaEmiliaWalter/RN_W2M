import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import Card from "../../Constants/Card"
import ModalConfirm from "../ModalConfirm";
import React from 'react';
import { addUser } from '../../store/Actions/user.action';
import { useState } from 'react';

export default function NewWorker({navigation}) {

  //dispatch
  const dispatch = useDispatch();
  const status= useSelector( state => state.users.status);
  
  //UserInput
  const [inputUserName, setInputUserName] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");

  //Select & storage
  const [userSelected, setUserSelected] = useState({});
  const [users, setUsers] = useState([]);

  const [modalVisible, setModalVisibile] = useState(false);

    const handleChangeUserName = (value) =>{
      setInputUserName(value);
    };
    const handleChangeName = (value) =>{
      setInputName(value);
    };
    const handleChangeLastName = (value) =>{
      setInputLastName(value);
    };
   
    //addUser
    const handleAddUser = () =>{
      let newWorker = {
        UserName: inputUserName,
        Name: inputName,
        LastName: inputLastName,
        id: Math.random().toString(),
      };
      setUsers([...users,newWorker]);
      setInputUserName("");
      setInputName("");
      setInputLastName("");
      //dispatch: add to firebase
      dispatch( addUser(newWorker));
    };
  
    
    const handleRemove = (id) =>{
      setModalVisibile(true);
      setUserSelected(users.find( user => user.id ===id));
    };
  
    const onHandleRemoveConfirm = () =>{
      const newList = users.filter( user => user.id !== userSelected.id);
      setUsers (newList);
      setModalVisibile(false);
      setUserSelected({});
    };
  
    return (
    <View style={{justifyContent:"space-between",height:200}}>
        <View style={styles.inputContainer}>
         <Text>
        Usuario
        </Text>
        <TextInput 
        placeholder="Ingrese usuario..." 
        onChangeText={handleChangeUserName}
        value={inputUserName}
        style={styles.input}
        />
       </View>
       <View style={styles.inputContainer}>
         <Text >
        Nombre
        </Text>
        <TextInput placeholder="Ingrese el nombre..." 
        onChangeText={handleChangeName}
        value={inputName}
        style={styles.input}
        />
       </View>
       <View style={styles.inputContainer}>
         <Text>
        Apellido
        </Text>
        <TextInput placeholder="Ingrese el apellido..." 
        onChangeText={handleChangeLastName}
        value={inputLastName}
        style={styles.input}
        />
       </View>
      
      {status ==="loading" 
      ? 
      (<ActivityIndicator color="#7991b8" size={20} />) 
      :
      (
      <TouchableOpacity style={{...styles.button, marginTop:20 }} onPress={handleAddUser}>
      <Text style={{color:"#ffffff"}}>Añadir</Text>         
      </TouchableOpacity>
      )
      }
      <SafeAreaView style={{ maxHeight: "100%", alignSelf:"center", marginTop:"10%"}}>
      <FlatList
      data={users}
      renderItem={data => {
        return (
        <Card key={data.id}>
        <View style={{alignSelf: "flex-start" }}>
        <Text style={styles.user}>Usuario: {data.item.UserName}</Text>
        <Text style={styles.user}>Nombre: {data.item.Name}</Text>
        <Text style={styles.user}>Apellido: {data.item.LastName}</Text>
        </View>
        
        <View style={{flexDirection: "row", marginTop:10, justifyContent:"space-evenly" } }>
        <TouchableOpacity style={styles.button}
        onPress={ ()=> handleRemove(data.item.id)}>
        <Text style={{color:"#ffffff"}}>Remover</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("MiRed")}>
          
        <Text style={{color:"#ffffff"}}>Ver usuario</Text> 
        </TouchableOpacity>
        </View>
      </Card>
      )
    
    }}
      keyExtractor={user => user.id}
      />
    </SafeAreaView>
   
  <ModalConfirm
  userSelected={userSelected}
  onHandleRemoveConfirm={onHandleRemoveConfirm}
  modalVisible={modalVisible}
  setModalVisibile={setModalVisibile}
  />
      </View>
    )
};


const styles = StyleSheet.create({
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
  
  button: {
   borderRadius: 20, 
    padding:5 ,
    maxWidth: "80%",
    alignSelf: "center",
    backgroundColor: "#7991b8" ,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

user:{
  width: "100%",
  fontSize: 16,
  color: "#7991b8",
},
modal:{
  marginBottom: "10%",
  alignItems: "center",
  marginTop:"100%", 
} , 
  });

