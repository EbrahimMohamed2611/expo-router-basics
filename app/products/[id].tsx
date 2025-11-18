import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductDetails() {
    const {id} = useLocalSearchParams();

  return (
    <View style={styles.conatiner}>
      <Text>ProductDetails for ID : {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})