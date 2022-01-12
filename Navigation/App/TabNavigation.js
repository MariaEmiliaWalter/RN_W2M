import Home from "../../Components/Home";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileNavigation from "./profileNavigation"
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import networkNavigation from "./networkNavigation";

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () =>{

  return (

    <Tab.Navigator 
    tabBarOptions={{ showIcon: true}}
    initialRouteName="Home"
    inactiveColor="#001e2b"
    activeColor="#f0edf6"
    barStyle={{backgroundColor: "#084764"}}
    screenOptions= {{
      showIcon: true,
      headerShown: false,
    }}
    >
      <Tab.Screen 
      name="network" 
      component={networkNavigation} 
      options={{ 
        tabBarLabel: 'Mi Red',
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="account-group"
              size={24}
              color={tabInfo.focused ? "white" : "#001e2b"} />)}
      }}
 />
       <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color={tabInfo.focused ? "white" : "#001e2b"} />)}
      }}
 />

      <Tab.Screen 
      name="profileNavigation"
      component={ProfileNavigation} 
      options={{
        tabBarLabel: 'Mi Perfil',
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={tabInfo.focused ? "white" : "#001e2b"} />)}
      }}
 />

 
    </Tab.Navigator>
  );
};


export default TabNavigation;

