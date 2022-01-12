import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { getUsers, selectUserId } from '../../store/Actions/user.action';
import { useDispatch, useSelector } from 'react-redux';

import { ESTILOS } from '../../Constants/Estilos';
import { useNavigation } from '@react-navigation/native';

const WorkerList = () => {

const navigation = useNavigation();
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [])
  
const data = useSelector(state => state.users.users);

const handleSelectUser = (item) => {
    dispatch(selectUserId(item.userId));
    navigation.navigate('userProfile');
  };
  

  return (
        <View >
        <FlatList
        style={{alignSelf:"center"}}
        data={data}
        keyExtractor={(item) => item.userId}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectUser(item)}>
           <View>
           <Text> Mis datos </Text>
            <Text> {data.item.Name} </Text>
            <Text> {data.item.name} </Text>
            <Text> {data.item.LastName} </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    
       <View>
      <TouchableOpacity 
      style={{...ESTILOS.button, marginTop:20 }}
      onPress={()=> navigation.navigate('newWorker')}
       >
      <Text style={{color:"#ffffff"}}>Añadir nuevo compañero</Text>         
      </TouchableOpacity>
          </View>
        </View>
    )
};

const styles = StyleSheet.create({
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

export default  WorkerList;