import React from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

import ReminderButtons from "../../components/ReminderButtons";
import ScreenTitle from "../../components/ScreenTitle/ScreenTitle";
import globalStyles from "../../config/styles";
import style from "./styles";

const Reminder = () => {
  return (
    <ScrollView
      style={globalStyles.screenContainer}
      contentContainerStyle={{ paddingBottom: "25%" }}
    >
      <ScreenTitle title="Reminders" subtitle="TO-DO LIST" />
      <ReminderButtons />
      <View style={style.reminderEmptyContainer}>
        <Image
          source={require("../../../assets/images/reminderEmptyImage.png")}
          style={style.reminderEmptyImage}
        />
        <Text style={style.reminderEmptyText}>Nothing Due Today</Text>
        <Text style={style.reminderEmptySubtext}>Tap + to add a reminder</Text>
        <Pressable>
          <View style={style.reminderAddButton}>
            <Entypo name="plus" size={30} color="white" />
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Reminder;
