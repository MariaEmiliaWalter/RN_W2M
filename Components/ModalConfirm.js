import { Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

export default function ModalConfirm({userSelected, onHandleRemoveConfirm, modalVisible, setModalVisibile}) {
    return (
        <View style={styles.container} >
           <Modal visible={modalVisible} animationType="fade" presentationStyle="overFullScreen" >
        <View style={styles.modal}>
          <Text>¿Estás seguro que desea borrar a {userSelected.value}?</Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-around", marginHorizontal: "10%",}}>
        <TouchableOpacity style={styles.button} onPress={()=>setModalVisibile(false)}><Text style={{color:"#ffffff"}}>No, me confundí</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onHandleRemoveConfirm}><Text style={{color:"#ffffff"}}>Sí, estoy seguro</Text></TouchableOpacity>
        </View>
            </Modal>
        </View>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginVertical: "3%",
        marginHorizontal: "3%",
        marginTop: StatusBar.currentHeight || 0,
      },
    modal:{
        marginBottom: "10%",
        alignItems: "center",
        marginTop:"100%", 
      },
      button: {
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
      
})