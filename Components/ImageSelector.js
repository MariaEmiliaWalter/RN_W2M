import * as ImagePicker from 'expo-image-picker';

import { Alert, Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';

const ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState(null);
  const dispatch = useDispatch();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la cámara para usar la aplicación',
        [{ text: 'Ok' }],
      );
      return false;
    }

    return true;
  }

  const handleTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,16],
      quality: 0.8,
    });

    setPickedUri(image.uri);
    props.onImage(image.uri);
    dispatch(updateUserPhoto(pickedUri));
  };


  return (

    <View style={styles.containerPhoto}>
        {pickedUri
          ? <Image source={{ uri: pickedUri }} style={styles.image} />
       : 
       <Image style={styles.image}/>
        }            
    <MaterialCommunityIcons
    style={styles.iconImage}
      name="camera"
      size={60}
      color="white"
      onPress={handleTakeImage}
       />
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
});

export default ImageSelector;
