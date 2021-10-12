import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Scheherazade_700Bold } from "@expo-google-fonts/scheherazade";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import LoginScreen from "./src/screens/Login";

export default function App() {
  let [fontsLoaded] = useFonts({
    Scheherazade_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={style.mainView}>
        <LoginScreen />
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
