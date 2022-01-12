import {
 applyMiddleware,
 combineReducers,
 createStore,
} from "redux";

import ingresoReducer from "./Reducers/ingreso.reducer";
import thunk from "redux-thunk";
import userReducer from "./Reducers/user.reducer";

rootReducer = combineReducers(
{users: userReducer,
ingreso: ingresoReducer,  

});

export default createStore(
    rootReducer,
    applyMiddleware(thunk), 
 );
 
 