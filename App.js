import React from 'react'
import { View } from 'react-native';
import Home from './pages/Quiz';
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import {globalStyle as styles} from './utils/common-styles'

export default function App() {
  let [fontsLoaded] = useFonts({
    LexendDeca: require("./assets/fonts/LexendDeca.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  return (
    <View style = {styles.main}>
      <Home/>
    </View>
  )
}