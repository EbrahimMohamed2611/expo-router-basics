import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Products() {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Link href="./1" relativeToDirectory>Product 1</Link>
      <Link href="./2" relativeToDirectory>
        Product 2
      </Link>
      <Link href="/products/3">Product 3</Link>
      <Link href="/products/4">Product 4</Link>
      <Link href="/products/sub-product/4">Product Not Found</Link>
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
