import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SHADOWS, SIZES, assets, FONTS } from "../constants";
import CircleButton from "./circle-button";
import SubInfo from "./sub-info";
import NFTTitle, { ETHPrice, ReactBtn } from "./nft-title";

const NFTCard = (props) => {
  const {navigate} = useNavigation();

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
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={props.name}
          subTitle={props.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ETHPrice price={props.price} />
          <ReactBtn 
            minW={120}
            fontSize={SIZES.font}
            handlePress={() => navigate("Details", {props})}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;

const styles = StyleSheet.create({});
