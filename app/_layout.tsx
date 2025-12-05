import { Stack } from "expo-router";
import { Alert, Image, Pressable, StyleSheet } from "react-native";

export default function RootLayout() {
  function AboutLogo() {
    return (
      <Image
        style={{ height: 40, width: 40 }}
        source={require("../assets/images/info.png")}
      />
    );
  }

  function ProfileLogo() {
    return (
      <Image
        style={{ height: 40, width: 40 }}
        source={require("../assets/images/user.png")}
      />
    );
  }
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#5c88ff" },
        headerTintColor: "black",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          headerTitle: () => <AboutLogo />,
          headerRight: (props) => (
            <Pressable onPress={() => Alert.alert("Menu Opened")}>
              <Image
                style={{ height: 25, width: 25 }}
                source={require("../assets/images/menu.png")}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitle: () => <ProfileLogo />,
          headerRight: (props) => (
            <Pressable onPress={() => Alert.alert("Menu Opened")}>
              <Image
                style={{ height: 25, width: 25 }}
                source={require("../assets/images/menu.png")}
              />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
