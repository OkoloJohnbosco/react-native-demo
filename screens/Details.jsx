import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../components/focused-status-bar'
import { COLORS } from '../constants'
import CircleButton from '../components/circle-button'
import NFTTitle, { ETHPrice, ReactBtn } from "../components/nft-title";

const Details = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <FocusedStatusBar />
    <View>
      <Text>Details</Text>
    </View>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({})