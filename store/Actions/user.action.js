import * as FileSystem from "expo-file-system";

import { SelectUser, fetchUsers, insertUser, updateUserPicture } from "../../db";

import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SELECT_USER = "SELECT_USER";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const GET_USERS = "GET_USERS";
export const UPDATE_PROFILE_PHOTO = "UPDATE_PROFILE_PHOTO";
export const GET_USER_PROFILE ="GET_USER_PROFILE";


export const getProfileUser = () =>{
return async dispatch =>{
try{
    const UserEmail = await AsyncStorage.getItem('UserEmail');  
    const result = await SelectUser(UserEmail); 
    console.log(result);
    
  
        dispatch({
            type: GET_USER_PROFILE,
            users: result.rows_array,
            selected: result.insertId,
            }) 
        
    }
        catch (error){
            console.log(error);
        }
     }};
  

export const getUsers = () =>{
    return async dispatch =>{ 

        try{   
         
        dispatch({
            type: GET_USERS,
            status:"loading",
        });
        
    
        const data = await fetchUsers();
        console.log(data);
        
        dispatch({
            type: GET_USERS,
            users: data.rows_array,
        });

        dispatch({
            type: GET_USERS,
            status:"Añadido",
        });
         
    }catch (error){
    console.log(error.message)
    throw error;
    }
}};

export const selectUserId = (id) =>({
    userId: id,
    type:SELECT_USER,
});


export const addUser = (user) =>{
return async dispatch =>{
    try{    
     dispatch({
       type: ADD_USER,
       status:"loading",
        });

  console.log(user);   
  
   const result = await insertUser(
        user.image,
        user.name,
        user.lastname,
        user.email,
        user.profession,
        user.preference,
        user.createdAt
   ); 

console.log(result);

dispatch({
        type: ADD_USER,
        payload: {
        id: result.insertId,
        image:user.image,
        name:user.name,
        lastname: user.lastname,
        email: user.email,
        profession:user.profession,
        preference: user.preference,
        createdAt:user.createdAt
        }
    });
    
    dispatch({
        type: ADD_USER,
        status:"Añadido",
    });
    
    
    }catch(error){
        console.log(error.message);
        throw error;
    };    
      
 }};

export const removerUser = (id) =>({
    id: id,
    type:DELETE_USER,
});


export const updateUserPhoto = (picture) =>{
return async dispatch =>{
    const UserEmail = await AsyncStorage.getItem('UserEmail');
 
        dispatch({
          type: UPDATE_PROFILE_PHOTO,
          status:"loading",
           });   
 
    const fileName = picture.split("/").pop();
    const Path = FileSystem.documentDirectory+ fileName;
           
 try{
     
    FileSystem.moveAsync({
    from: picture,
    to: Path,
    
    });
 
    await updateUserPicture(Path,UserEmail); 

    dispatch({
        type:UPDATE_PROFILE_PHOTO,
        users: {
        ...users,
        image:Path
        }
    });

    dispatch({
        type: UPDATE_PROFILE_PHOTO,
        status: "Añadido",
        });

  }catch{
    Alert.alert(
        'Ups!, la imagen no se ha cargado. Intente nuevamente',
        [{ text: 'Ok' }],
      );
    };  
}
};


// export const notworking = () =>{
//     return async dispatch =>{

//         dispatch({
//             type: GET_USERS,
//             status:"loading",
//         });
        
//         try{ 
//             const response = await fetch(`${API_URL}.firebaseio.com/usuarios.json`, {
//                 method: "POST",
//                 headers:{
//                     "Content-Type": "application/json",
//                 }
//             });
            
//         const result = await response.json();
        
//  //Le doy un id a esa lista por posición de cada usuario
//  if(response.ok){ 
//         const userList = Object.keys(result).map(key => ({ 
//             ...result[key],
//             userId: key,
//        }));
//         console.log(userList);
       
//             dispatch({
//             type: GET_USERS,
//             users: userList,
//             status: "Añadido",
//             });
//         }
//         }catch(error){
//         console.log(error.message);
//       }
//      }
//     };

