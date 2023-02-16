import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { COLORS, NFTData } from "../constants";
import FocusedStatusBar from "../components/focused-status-bar";

const Home = () => {
  return (
    <SafeAreaView >
      <FocusedStatusBar backgroundColor={COLORS.primary}  />
      <View style={styles.container}>
        {/* <View style={{ zIndex: 0 }}> */}
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "white"
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
