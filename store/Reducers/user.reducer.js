import { ADD_USER, GET_USERS, GET_USER_PROFILE, SELECT_USER, UPDATE_PROFILE_PHOTO } from "../Actions/user.action";

import User from "../../models/ClassUser";

const initialState = {
  users: [],
  selected: null,
  status: null,
  token: null,
  id: null,

};

const userReducer = (state = initialState, action) =>{
  switch(action.type){ 
    case SELECT_USER:
      return{
        ...state,
        selected: action.id,
      };
    case ADD_USER:
      const newUser = new User(
        action.payload.id,
        action.payload.image,
        action.payload.name,
        action.payload.lastname,
        action.payload.email,
        action.payload.profession,
        action.payload.preference,
        action.payload.createdAt,
      );
      return{
        ...state,
        status: action.status ,
        users: action.users.concat(newUser), 
      };
    case GET_USERS:
      //Object.keys(action.users)
      return{
        ...state,
        status: action.status,
        users: action.users.map(item => new User(
          item.image,
          item.name,
          item.lastname,
          item.email,
          item.profession,
          item.preference,
          item.createdAt
      ))
      };
    case GET_USER_PROFILE: 
      return{
        ...state,
        token: action.token,
        users: action.users,
        selected: action.selected,
      };
    case UPDATE_PROFILE_PHOTO: 
      return{
      ...state,
      status: action.status,
      users: action.users
      };
      default:
      return state;        
  }  
};

export default userReducer;