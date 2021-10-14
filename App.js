import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Scheherazade_700Bold } from "@expo-google-fonts/scheherazade";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import LoginScreen from "./src/screens/Login";
import MyGarden from "./src/screens/MyGarden";

export default function App() {
  let [fontsLoaded] = useFonts({
    Scheherazade_700Bold,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={style.mainView}>
        {/* <LoginScreen /> */}
        <MyGarden />
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
