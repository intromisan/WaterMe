import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import style from "./styles";

const ReminderButtons = () => {
  const [activePage, setActivePage] = useState("1");

  const activeButton = activePage === "1" ? { left: 3 } : { right: 3 };

  return (
    <View style={style.reminderButtons}>
      <Pressable
        onPress={() => setActivePage("1")}
        style={(style.buttonLeft, style.reminderButton)}
      >
        <View>
          <Text
            style={{
              color: activePage === "1" ? "#336657" : "#63b68a",
              ...style.buttonText,
            }}
          >
            Today
          </Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => setActivePage("2")}
        style={(style.buttonLeft, style.reminderButton)}
      >
        <View>
          <Text
            style={{
              color: activePage === "2" ? "#336657" : "#63b68a",
              ...style.buttonText,
            }}
          >
            Upcoming
          </Text>
        </View>
      </Pressable>

      <View style={{ ...activeButton, ...style.active }} />
    </View>
  );
};

export default ReminderButtons;
