import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Header() {
    return (
   
    <View style={styles.titleHeader}>
        <Image
        source={require('../../assets/logo-08.png')}
        style={styles.textHeader}
/> 
    </View>
    )
};


const styles = StyleSheet.create({

titleHeader: {
  paddingTop:"10%",
    backgroundColor: "#084764",
    width: "100%",
    height: 150,
    maxHeight:"100%",
    justifyContent: "center",
  },
  textHeader:{
    alignSelf: "center",
    width: 250,
    height: 100,
  },
});