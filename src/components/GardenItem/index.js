import React from "react";
import { Image, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import style from "./styles";

const GardenItem = ({ source, title, reminders }) => {
  return (
    <View style={style.gardenItemContainer}>
      <Image
        style={style.gardenItemImage}
        source={require("../../../assets/images/ficus.jpg")}
      />
      <View>
        <Text style={style.gardenItemTitle}>{title}</Text>
        <Text style={style.gardenItemSubtitle}>
          {reminders ? "" : "No Reminders"}
        </Text>
      </View>
      <Entypo
        style={style.gardenItemButton}
        name="dots-three-vertical"
        size={24}
        color="black"
      />
    </View>
  );
};

export default GardenItem;
