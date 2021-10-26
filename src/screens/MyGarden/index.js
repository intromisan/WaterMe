import React from "react";
import { ScrollView, View } from "react-native";
import GardenItem from "../../components/GardenItem";
import ScreenTitle from "../../components/ScreenTitle/ScreenTitle";
import globalStyles from "../../config/styles";

const MyGarden = () => {
  return (
    <ScrollView
      style={globalStyles.screenContainer}
      contentContainerStyle={{ paddingBottom: "25%" }}
    >
      <ScreenTitle wishlist title="My Garden" subtitle="Plant Collection" />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
    </ScrollView>
  );
};

export default MyGarden;
