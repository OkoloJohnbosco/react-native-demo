import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import FocusedStatusBar from "../components/focused-status-bar";
import { COLORS, SHADOWS, SIZES } from "../constants";
import CircleButton from "../components/circle-button";
import NFTTitle, { ETHPrice, ReactBtn } from "../components/nft-title";
import DetailsBid from "../components/details-bid";
import DetailsDesc from "../components/details-desc";
import DetailsHeader from "../components/details-header";
import SubInfo from "../components/sub-info";

const Details = ({ navigation, route }) => {
  const { props } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <FocusedStatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 2,
          backgroundColor: "rgba(0,0,0,0.1)",
          zIndex: 1,
        }}
      >
        <ReactBtn
          width="100%"
          minW={170}
          fontSize={SIZES.font}
          {...SHADOWS.dark}
        />
        {/* <DetailsBid />
        <DetailsDesc /> */}
      </View>
      <FlatList
        data={props.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge,
          flex: 1,
        }}
        ListHeaderComponent={
          <>
            <DetailsHeader data={props} navigation={navigation} />
            <SubInfo />
            <View style={{padding: SIZES.font}}>
              <DetailsDesc data={props} />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
