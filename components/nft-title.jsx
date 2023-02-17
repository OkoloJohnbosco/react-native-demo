import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const NFTTitle = ({ title, subTitle, subTitleSize, titleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const ETHPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
          marginRight: 2,
        }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};
export const ReactBtn = ({ handlePress, fontSize, ...props }) => (
  <TouchableOpacity
    onPress={handlePress}
    style={{
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      padding: SIZES.small,
      ...SHADOWS.light,
      ...props,
    }}
  >
    <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: "center"

    }}>Place a bid</Text>
  </TouchableOpacity>
);

export default NFTTitle;
