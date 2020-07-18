import React from "react";
import Appbar from "../components/Appbar";
import { View } from "react-native";
import QuizBox from "../components/QuizBox";
import Button from "../components/Button";

const Quiz = () => {
  return (
    <View>
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
