import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        headerTitle: "Expo Router",
        headerTitleAlign: "center",
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "#f8f8f8",
        tabBarInactiveTintColor: "#58ecb6",
        tabBarStyle: { backgroundColor: "#539e83" },
        headerStyle: { backgroundColor: "#539e83" },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="info-circle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "My Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
          tabBarBadge: 4,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
