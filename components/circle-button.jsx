import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
    style={{
        width: 30,
        height: 30,
        backgroundColor: COLORS.white,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 7,
        right: 7,
        zIndex: 3,
        ...props
    }}
    onPress={handlePress}
    >
      <Image
        source={imgUrl}
        style={{
          width: 20,
          height: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export default CircleButton;