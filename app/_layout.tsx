import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function DrawerLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen
        name="price"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen name="dashboard" options={{}} />
      <Stack.Screen name="settings" options={{}} />
      <Stack.Screen name="about" options={{}} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
});
