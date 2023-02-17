import { View, Text, Image } from "react-native";
import React from "react";
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

const SubInfo = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {[assets.person02, assets.person03, assets.person04].map(
          (person, index) => (
            <Image
              source={person}
              resizeMode="contain"
              style={{
                width: 36,
                height: 36,
                marginLeft: index === 0 ? 0 : -SIZES.font,
              }}
            />
          )
        )}
      </View>

      <View
        style={{
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.base,
          backgroundColor: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
          elevation: 1,
          borderRadius: 4,
          maxWidth: "50%",
          ...SHADOWS.light,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            color: COLORS.primary,
            fontSize: SIZES.small,
          }}
        >
          Ending in
        </Text>

        <Text
          style={{
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
            fontSize: SIZES.medium,
          }}
        >
          12h 30m
        </Text>
      </View>
    </View>
  );
};

export default SubInfo;
