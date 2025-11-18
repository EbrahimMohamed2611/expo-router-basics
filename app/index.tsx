import { Link } from "expo-router";
import { Text, View } from "react-native";

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
    </View>
  );
}
