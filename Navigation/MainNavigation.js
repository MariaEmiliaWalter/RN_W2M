import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import IngresoNavigation from './Ingreso/IngresoNavigation';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/TabNavigation';
import { initAuthentication } from '../store/Actions/ingreso.action';

export default function MainNavigation() {

 const status= useSelector( state => state.ingreso.status );
 const user = useSelector(state => state.ingreso.userId);
 const dispatch = useDispatch();

useEffect(() => {
    dispatch(initAuthentication())
}, [])

    return (
 <NavigationContainer>
    { (status === false && !user) 
    ? 
    <IngresoNavigation/>
    :
    <TabNavigation/>
}     

</NavigationContainer>
    )
};

  
