import React from "react";
import { View } from "react-native";
import ScreenTitle from "../../components/ScreenTitle/ScreenTitle";
import style from "./styles";

const MyGarden = () => {
  return (
    <View style={style.myGardenContainer}>
      <ScreenTitle wishlist />
    </View>
  );
};

export default MyGarden;
