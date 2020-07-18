import { surface, primary, textPrimary } from "../utils/colors";
import { Feather } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import Home from "../pages/Home";
import AddDeck from "../pages/AddDeck";

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={primary}
      inactiveColor={textPrimary}
      barStyle={{ backgroundColor: surface }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={24} />
          ),
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Add Deck",
          tabBarIcon: ({ color }) => (
            <Feather name="plus-square" color={color} size={24} />
          ),
        }}
        name="add"
        component={AddDeck}
      />
    </Tab.Navigator>
  );
}
