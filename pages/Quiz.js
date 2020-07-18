import React from "react";
import Appbar from "../components/Appbar";
import { View } from "react-native";
import QuizBox from "../components/QuizBox";
import Button from "../components/Button";
import { globalStyle } from "../utils/common-styles";
const Quiz = () => {
  return (
    <View style={globalStyle.main}>
      <Appbar title="Machine Learning" subtitle="QUIZ" />
      <QuizBox />
      <View>
        <Button onPress={() => {}} title="Correct" />
        <Button onPress={() => {}} title="Incorrect" type="secondary" />
      </View>
    </View>
  );
};

export default Quiz;
