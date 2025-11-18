import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function NotFoundPage() {
  return (
    <View style={styles.container}>
      <Text>Global NotFoundPage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20

    }
})