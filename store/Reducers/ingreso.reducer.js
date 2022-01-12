import { LOG_OUT, SIGN_IN_CONFIRM, SIGN_UP_CONFIRM } from "../Actions/ingreso.action";

const initialState = {
  statusLoading: null,
  status: false,
  selected: null,
  token: null,
  userId: null,
};

const ingresoReducer = (state = initialState, action) =>{
  switch(action.type){ 
   case LOG_OUT:
     return{
       ...state,
       token: action.token,
       status: action.status,
       userId: action.userId
     };
    case SIGN_UP_CONFIRM:
      return{
        ...state,
        status: action.status , 
        token: action.token,
        userId: action.userId,
      };
    case SIGN_IN_CONFIRM:
      return{
        ...state,
        status: action.status,
        token: action.token,
        userId: action.userId,
      };
      default:
      return state;        
  }  
};

export default ingresoReducer;