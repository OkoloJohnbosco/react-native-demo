import React, { useState } from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import NFTTitle, { ETHPrice, ReactBtn } from "./nft-title";

function DetailsDesc({ data }) {
  const [readMore, setReadMore] = useState(false);
  
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
      <View style={{ marginVertical: SIZES.extraLarge * 1.2 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {!readMore
              ? data.description.slice(0, 300) + "...."
              : data.description}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={() => setReadMore((prev) => !prev)}
            >
              {readMore ? "Show Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}

export default DetailsDesc;
