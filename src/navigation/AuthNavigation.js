import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login";

const AuthNavigation = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
