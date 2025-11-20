import { Slot } from "expo-router";
import React from "react";
import { Image, StyleSheet } from "react-native";

export default function AuthLayout() {
  return (
    <>
      <Image
        source={require("../../assets/images/react-logo.png")}
        style={styles.image}
      />
      <Slot />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
});
