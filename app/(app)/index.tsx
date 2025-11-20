import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

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
      <Link
        style={[styles.authButton, { backgroundColor: "#1e90ff" }]}
        href="/forgot-password"
      >
        Forgot Password
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
