import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { globalStyle } from "../utils/common-styles";
import DeckItem from "../components/DeckItem";

export default function DeckHome() {
  return (
    <View>
      <Text style={globalStyle.title}>Your Decks</Text>
      <DeckItem cards="2" title="Machine Learning" />
      <DeckItem cards="2" title="Machine Learning" />
      <DeckItem cards="2" title="Machine Learning" />
      <StatusBar style="auto" />
    </View>
  );
}
