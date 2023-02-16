import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS, NFTData } from "../constants";
import FocusedStatusBar from "../components/focused-status-bar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={styles.container}>
        <View style={{ zIndex: 0 }}>
          <Text style={styles.text}>Home boi</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
