import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SHADOWS, SIZES, assets } from "../constants";
import CircleButton from "./circle-button";
import SubInfo from "./sub-info";
import NFTTitle, { ETHPrice } from "./nft-title";

const NFTCard = (props) => {
  const navigate = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        position: "relative",
        marginBottom: SIZES.extraLarge,
        padding: 0,
        overflow: "hidden",
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          resizeMode="cover"
          source={props.image}
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: SIZES.font,
            borderTopLeftRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} />
      </View>
      {/* <ETHPrice /> */}
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={props.name}
          subTitle={props.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>
    </View>
  );
};

export default NFTCard;

const styles = StyleSheet.create({});
