import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

export default function WorkerProfile({route}) {
    return (
        <View style={styles.container}>
        <Text>{route.params.name}</Text>
        <Text>{route.params.lastName}</Text>
        <Text>{route.params.profesion}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
