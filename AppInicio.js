import {
  StatusBar,
  StyleSheet,
  View
} from "react-native";

import Header from "./Components/Header/Header";
import MainNavigation from "./Navigation/MainNavigation";
import React from "react";

// import { useFonts } from "expo-font";


export default function AppInicio() {
 // const [loaded] = useFonts({
  // "roboto-regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),  
  // });
  
  
  return (
       <View style={styles.mainContainer}>
      <Header/>
      <View style={styles.container}> 
      <MainNavigation/>           
      <StatusBar style="auto" />   
      </View>
    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    backgroundColor: "#084764",

    justifyContent:"center",
    width: "100%",
    //height: "100%",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  mainContainer: {
    backgroundColor: "#084764",
    //backgroundColor: "white",
    alignContent:"center",
    flex: 1,
  },
});
