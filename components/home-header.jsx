import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { COLORS, SIZES, assets, FONTS } from "../constants";

const HomeHeader = ({onSearch}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View
          style={{
            width: 40,
            height: 40,
          }}
        >
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View
        style={{
          marginVertical: SIZES.font,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello Victoria
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: 4,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            borderRadius: 4,
            backgroundColor: COLORS.secondary,
            paddingHorizontal: SIZES.font / 2,
            paddingVertical: SIZES.small - 2,
            alignItems: "center"
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
          <TextInput
            placeholder="Search NFT"
            placeholderTextColor="white"
            style={{ color: COLORS.white, flex: 1, border: 0, outline: "none", fontFamily: FONTS.regular }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
