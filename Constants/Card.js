import { StyleSheet, View } from 'react-native'

import React from 'react'

const Card = props => {
    return (
        <View style={styles.cardContainer}>
            {props.children}
        </View>
    )
};

export default Card;


const styles = StyleSheet.create({
    cardContainer:{
        width: 300,
        maxWidth: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:"white",
        borderRadius:15,
        padding: 10,
        marginBottom: 15,
        borderColor: "orange",
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      
        elevation: 5, 
    }
})