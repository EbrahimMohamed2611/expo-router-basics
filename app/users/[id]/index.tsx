import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function UserDetails() {
    const{id} = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>UserDetails for user iid : {id}</Text>
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