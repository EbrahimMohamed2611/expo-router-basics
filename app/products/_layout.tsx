import { Slot } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProductLayout() {
  return (
    <>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Discont</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f3724bff",
  },
  footerText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
});
