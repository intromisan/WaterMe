import React from "react";
import { ScrollView, View } from "react-native";
import GardenItem from "../../components/GardenItem";
import ScreenTitle from "../../components/ScreenTitle/ScreenTitle";
import style from "./styles";

const MyGarden = () => {
  return (
    <ScrollView
      style={style.myGardenContainer}
      contentContainerStyle={{ paddingBottom: "25%" }}
    >
      <ScreenTitle wishlist />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
      <GardenItem title="Weeping Fig (Ficus)" reminders={false} />
    </ScrollView>
  );
};

export default MyGarden;
