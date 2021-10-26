import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MyGarden from "../screens/MyGarden";
import Explore from "../screens/Explore";
import Search from "../screens/Search";
import Reminder from "../screens/Reminder";
import Wiki from "../screens/Wiki";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableWithoutFeedback
      style={{ top: -12, justifyContent: "center", alignItems: "center" }}
      onPress={onPress}
    >
      <View
        style={{
          width: 75,
          height: 75,
          borderRadius: 37,
          backgroundColor: "#ffffff",
        }}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
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
        tabBarActiveTintColor: "#63b68a",
        tabBarInactiveTintColor: "#87a29b",
      }}
    >
      <Tabs.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather
                name="book-open"
                size={24}
                color="black"
                style={{ color: focused ? "#63b68a" : "#87a29b" }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Wiki"
        component={WikiStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Zocial
                name="wikipedia"
                size={24}
                color="black"
                style={{ color: focused ? "#63b68a" : "#87a29b" }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather
                name="search"
                size={32}
                color="black"
                style={{ color: focused ? "#63b68a" : "#87a29b" }}
              />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="Reminder"
        component={RemindersStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name="watering-can-outline"
                size={26}
                color="black"
                style={{ color: focused ? "#63b68a" : "#87a29b" }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="My Garden"
        component={MyGardenStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="ios-leaf-outline"
                size={24}
                color="black"
                style={{ color: focused ? "#63b68a" : "#87a29b" }}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainNavigation;
