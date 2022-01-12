import NewWorker from '../../Components/Worker/NewWorker';
import React from 'react';
import WorkerList from '../../Components/Worker/WorkerList';
import WorkerProfile from '../../Components/Worker/WorkerProfile';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const networkNavigation = () => {
    return (
<Stack.Navigator>
  <Stack.Screen name="MiRed"
   component={WorkerList} 
   options={{ title: 'Mi Red' }}
    
   />

    <Stack.Screen name="userProfile"
   component={WorkerProfile} 
   options={{ title: 'Perfil de usuario' }}
   />

</Stack.Navigator>

    )
}



export default networkNavigation; 