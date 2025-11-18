import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoanTypes() {
    const {types} = useLocalSearchParams<{types: string[]}>();

  return (
    <View style={styles.conatiner}>
      <Text>LoanTypes</Text>
      <Text>{JSON.stringify(types)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20
    }
})