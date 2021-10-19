import React from "react";
import { Image, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const GardenItem = () => {
  return (
    <View>
      <Image source={require("../../../assets/images/ficus.jpg")} />
      <Text>Weeping Fig (Ficus)</Text>
      <Entypo name="dots-three-vertical" size={24} color="black" />
    </View>
  );
};

export default GardenItem;
