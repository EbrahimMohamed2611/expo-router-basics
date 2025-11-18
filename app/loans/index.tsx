import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Loans() {
  return (
    <View style={styles.container}>
      <Text>Loans</Text>
      <Link style={styles.link} href="/loans/rf">Retail Finance</Link>
      <Link style={styles.link} href="/loans/cm/student">Card Management</Link>
      <Link style={styles.link} href="/loans/autolease/bmw/2025/small">Autolease</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    link:{
        fontSize:18,
        backgroundColor:'gold',
        padding:10,
        borderRadius:5
    }
})