import { Link, Redirect } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const isLoggedIn = false;
  if (!isLoggedIn) return <Redirect href="/login" />;

  return (
    <View style={styles.conatiner}>
      <Text>Profile</Text>
      <Link href="/users/1">User 1</Link>
      <Link href="/users/2">User 2</Link>
      <Link href="/users/3">User 3</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
