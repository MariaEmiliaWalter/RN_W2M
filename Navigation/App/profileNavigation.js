import React from 'react';
import UserProfile from '../../Components/Users/UserProfile';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const profileNavigation = () =>{ 
    return (
<Stack.Navigator>
  <Stack.Screen name="profile"
   component={UserProfile} 
   options={{ title: 'Mi Perfil' }}  
   />


</Stack.Navigator>

    )
};

export default profileNavigation;