import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/profile">Profile</Link>
      <Link href="/price">Price</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
