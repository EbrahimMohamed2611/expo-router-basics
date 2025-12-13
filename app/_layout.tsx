import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { StyleSheet } from "react-native";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          title: "Home Title",
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: "Profile Title",
          drawerLabel: "Profile",
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings Title",
          drawerLabel: "Settings",
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="cog" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="dashboard"
        options={{
          title: "Dashboard Title",
          drawerLabel: "Dashboard",
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="tachometer-alt" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
});
