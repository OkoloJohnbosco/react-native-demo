import React, { useState } from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import NFTTitle, { ETHPrice, ReactBtn } from "./nft-title";

function DetailsDesc({ data }) {
  console.log(data);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <ETHPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
            opacity: 0.9,
          }}
        >
          {data.description}
        </Text>
      </View>
    </>
  );
}

export default DetailsDesc;
