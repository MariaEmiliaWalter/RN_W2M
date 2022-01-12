import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ingresoNavigation from './IngresoNavigation';

const Tab = createMaterialBottomTabNavigator();

const TabIngresoNavigation = () =>{

    return (

    <Tab.Navigator screenOptions={{ headerShown: false }}>
       <Tab.Screen 
          name="tabIngreso" 
          component={ingresoNavigation} />
      </Tab.Navigator> 
    )};

    
export default TabIngresoNavigation;

