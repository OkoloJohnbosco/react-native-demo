import { Text, View, SafeAreaView, FlatList, Platform, ScrollView } from "react-native";
import React from "react";
import FocusedStatusBar from "../components/focused-status-bar";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import NFTTitle, { ETHPrice, ReactBtn } from "../components/nft-title";
import DetailsBid from "../components/details-bid";
import DetailsDesc from "../components/details-desc";
import DetailsHeader from "../components/details-header";
import SubInfo from "../components/sub-info";

const Details = ({ navigation, route }) => {
  const { props } = route.params;
  console.log(Platform)
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
          bottom: 10,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 30,
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <ReactBtn
        width="100%"
          minW={170}
          fontSize={SIZES.font}
          {...SHADOWS.dark}
        />
      </View>
      <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
      >
      <FlatList
        data={props.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          paddingBottom: 34,
          flex: 1,
        }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={props} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={props} />
              {props.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid on {Platform.OS}
                </Text>
              )}
            </View>
          </>
        )}
      />
      </ScrollView>

          
    </SafeAreaView>
  );
};

export default Details;

