import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MyGarden from "../screens/MyGarden";
import LoginScreen from "../screens/Login";
import Explore from "../screens/Explore";
import Search from "../screens/Search";
import Reminder from "../screens/Reminder";
import Wiki from "../screens/Wiki";

const Tabs = createBottomTabNavigator();
const MyGardenStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const SearchStack = createStackNavigator();
const RemindersStack = createStackNavigator();
const WikiStack = createStackNavigator();

const MyGardenStackScreen = () => {
  return (
    <MyGardenStack.Navigator screenOptions={{ headerShown: false }}>
      <MyGardenStack.Screen name="MyGardenMain" component={MyGarden} />
    </MyGardenStack.Navigator>
  );
};

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name="ExploreMain" component={Explore} />
    </ExploreStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="SearchMain" component={Search} />
    </SearchStack.Navigator>
  );
};

const RemindersStackScreen = () => {
  return (
    <RemindersStack.Navigator screenOptions={{ headerShown: false }}>
      <RemindersStack.Screen name="RemindersMain" component={Reminder} />
    </RemindersStack.Navigator>
  );
};

const WikiStackScreen = () => {
  return (
    <WikiStack.Navigator screenOptions={{ headerShown: false }}>
      <WikiStack.Screen name="WikiMain" component={Wiki} />
    </WikiStack.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: "10%",
          borderRadius: 30,
          borderTopColor: "transparent",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen name="Explore" component={ExploreStackScreen} />
      <Tabs.Screen name="Wiki" component={WikiStackScreen} />
      <Tabs.Screen name="Search" component={SearchStackScreen} />
      <Tabs.Screen name="Reminder" component={RemindersStackScreen} />
      <Tabs.Screen name="My Garden" component={MyGardenStackScreen} />
    </Tabs.Navigator>
  );
};

export default MainNavigation;
