import React from "react";
import { Image, Text, View } from "react-native";
import NFTTitle, { ETHPrice, ReactBtn } from "../components/nft-title";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

function DetailsBid({ bid }) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.base * 2,
        marginVertical: SIZES.base,
        alignItems: "center"
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
            fontSize: SIZES.small,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            marginTop: 3,
            fontSize: SIZES.small - 2,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <ETHPrice price={bid.price} />
    </View>
  );
}

export default DetailsBid;
