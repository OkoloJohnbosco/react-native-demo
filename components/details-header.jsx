import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import CircleButton from "./circle-button";
import { assets } from "../constants";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10 || 14}
      />
       <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10 || 14}
      />
    </View>
  );
};

export default DetailsHeader;
