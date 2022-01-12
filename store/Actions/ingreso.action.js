import { SIGN_IN_URL, SIGN_UP_URL, UPDATE_PROFILE_URL } from "../../Constants/Database";

import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SIGN_UP_CONFIRM = "SIGN_UP_CONFIRM";
export const SIGN_IN_CONFIRM = "SIGN_IN_CONFIRM";
export const LOG_OUT = "LOG_OUT";


const ERROR_MESSAGE = {
    'EMAIL_EXISTS': 'El email ya está registrado',
    'EMAIL_NOT_FOUND': 'El email no está registrado',
    'INVALID_PASSWORD': 'La contraseña es incorrecta',
    
  };

export const SignInConfirm = (email, password) => {
    return async dispatch => {
const response = await fetch (SIGN_IN_URL , {
    method: "POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
    }),
});

const data = await response.json();

await AsyncStorage.setItem('UserEmail',email);
await AsyncStorage.setItem('token', data.idToken);
await AsyncStorage.setItem('userId', data.localId);



if (response.ok) {
dispatch({
    type: SIGN_IN_CONFIRM,
    token: data.idToken,
    userId: data.localId,
    status:true,
}); 
}else {
    console.log(data.error)
    const message = data.error.message;
    const messageText = message in ERROR_MESSAGE
      ? ERROR_MESSAGE[message]
      : 'Por favor, intente nuevamente';

    Alert.alert(
      'Ups!, ha ocurrido un error',
      messageText,
      [{ text: 'Ok' }],
    );
}}};


export const SignUpConfirm = (email,password) =>{
    return async dispatch =>{
            const response = await fetch(SIGN_UP_URL, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                }),
            });

        const data = await response.json();
        await AsyncStorage.setItem('token', data.idToken);
        await AsyncStorage.setItem('userId', data.localId);
        await AsyncStorage.setItem('UserEmail',email);

        if(response.ok){
            
            const updateResponse = await fetch( UPDATE_PROFILE_URL, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    idToken: data.idToken,
                }),
            });
            
         const updateData = await updateResponse.json();
         
        dispatch({
            type: SIGN_UP_CONFIRM,
            token: updateData.idToken,
            userId: updateData.localId,
            status:true,
        }); 
    } else {
        const message = data.error.message;
        const messageText = message in ERROR_MESSAGE
          ? ERROR_MESSAGE[message]
          : 'Intente nuevamente';
    
        Alert.alert(
          'Ups!, ha ocurrido un error',
          messageText,
          [{ text: 'Ok' }],
        );
      }  
}
};

export const initAuthentication = () =>{
    return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    
if (token !==null && userId !== null){
        dispatch({
            type: SIGN_IN_CONFIRM,
            token,
            userId,
        })
}
};
};

const clearAppData = async function() {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.error('Error clearing app data.');
    }
}

export const logOut = () =>{
return async dispatch => {
try{
     //const token = await AsyncStorage.removeItem('token');
    //const userId = await AsyncStorage.removeItem('userId');
    //await AsyncStorage.removeItem('UserEmail');   
    clearAppData();
    
        dispatch({
            type: LOG_OUT,
            token: null,
            userId: null,
            status: false,
        })
    //};
}catch(error){
    console.log(error)
}
};
};

