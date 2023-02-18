import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  // StatusBar,
} from "react-native";
import React from "react";
import { COLORS, NFTData } from "../constants";
import FocusedStatusBar from "../components/focused-status-bar";
import NFTCard from "../components/nft-card";
import HomeHeader from "../components/home-header";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={styles.container}>
        <View style={{ zIndex: 0, paddingHorizontal: 6  }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard {...item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
            // ListHeaderComponentStyle={{height: 30, backgroundColor: 'red'}}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{
              height: 300,
              backgroundColor: COLORS.primary,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
