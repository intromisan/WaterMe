import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigation from "./AuthNavigation";
import App from "./MainNavigator";
import { NavigationContainer } from "@react-navigation/native";

const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {userToken ? (
        <RootStack.Screen name="App" component={App} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthNavigation} />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
