import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import AppNavigation from "./navigation/Navigation";
import { View, Dimensions } from "react-native";
import AppStatusBar from "./navigation/StatusBar";
import { primary } from "./utils/colors";

export default function App() {
  let [fontsLoaded] = useFonts({
    LexendDeca: require("./assets/fonts/LexendDeca.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <AppStatusBar backgroundColor={primary} barStyle="dark-content" />
      <AppNavigation />
    </View>
  );
}
