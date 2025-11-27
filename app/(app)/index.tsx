import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/profile">Go to Profile</Link>
      <Link href="/about">Go to About</Link>
      <Link href="/products">Products</Link>
      <Link href="/loans">Loans</Link>
      <Link href="/wrong">wrong route</Link>
      <Link
        style={[styles.authButton, { backgroundColor: "gold" }]}
        href="/login"
      >
        Login
      </Link>
      <Link
        style={[styles.authButton, { backgroundColor: "tomato" }]}
        href="/register"
      >
        Register
      </Link>
      <Link href="/forgot-password" asChild>
        <Pressable
          style={{
            padding: 10,
            borderRadius: 5,
            width: 200,
            alignItems: "center",
            backgroundColor: "#34c571",
          }}
        >
          <Text>Forgot Password</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  authButton: {
    padding: 10,
    borderRadius: 5,
    width: 200,
    textAlign: "center",
  },
});
