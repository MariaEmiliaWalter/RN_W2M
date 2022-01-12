import Ingreso from '../../Views/Ingreso';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ingresoSelection from '../../Components/Users/IngresoSelection';

const Stack = createNativeStackNavigator();

const IngresoNavigation = () => {
    return (
    <Stack.Navigator>
<Stack.Screen
options={{ headerShown:false }}
name="ingresoInicial"
    component={Ingreso} 
    />
    <Stack.Screen 
    options={{ title: "Bienvenidx" }}
    name="ingresoSelection"
    component={ingresoSelection} 
    />
    
</Stack.Navigator>
    )
};

export default IngresoNavigation;