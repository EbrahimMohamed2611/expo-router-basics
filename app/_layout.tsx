import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    backgroundColor: "gold",
  },
  headerText: {
    fontSize: 20,

    textAlign: "center",
    marginVertical: 10,
  },
  footer: {
    backgroundColor: "#4bb3f3ff",
  },
  footerText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
});
