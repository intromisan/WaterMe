import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "../screens/Login";
import MyGarden from "../screens/MyGarden";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={LoginScreen} />
      <Tab.Screen name="My Garden" component={MyGarden} />
      {/* <Tab.Screen name="Home" component={MyGarden} />
      <Tab.Screen name="Home" component={MyGarden} />
      <Tab.Screen name="Home" component={MyGarden} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
