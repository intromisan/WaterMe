import React from "react";
import { View } from "react-native";
import GardenItem from "../../components/GardenItem";
import ScreenTitle from "../../components/ScreenTitle/ScreenTitle";
import style from "./styles";

const MyGarden = () => {
  return (
    <View style={style.myGardenContainer}>
      <ScreenTitle wishlist />
      <GardenItem />
    </View>
  );
};

export default MyGarden;
