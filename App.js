import React, { useState } from "react";
import "react-native-gesture-handler";
import { Scheherazade_700Bold } from "@expo-google-fonts/scheherazade";
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_600SemiBold_Italic,
} from "@expo-google-fonts/nunito";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import RootStackScreen from "./src/navigation/RootStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Scheherazade_700Bold,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <RootStackScreen userToken={"aea"} />
      </NavigationContainer>
    );
  }
}
