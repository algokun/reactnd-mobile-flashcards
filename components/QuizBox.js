import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { surface, textPrimary, primary, secondary } from "../utils/colors";

const QuizBox = () => {
  return (
    <View style={styles.quizBox}>
      <Text style={styles.counter}>1/3</Text>
      <Text style={styles.question}>What is Machine Learning ?</Text>
      <TouchableOpacity>
        <Text style={styles.flatButton}>View Answer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quizBox: {
    padding: 30,
    backgroundColor: surface,
    borderRadius: 10,
    marginTop: 50
  },
  counter: {
    fontFamily: "LexendDeca",
    color: primary,
    fontSize: 18,
    lineHeight: 22,
  },
  question: {
    fontFamily: "LexendDeca",
    color: textPrimary,
    fontSize: 24,
    lineHeight: 36,
  },
  flatButton: {
    marginTop: 20,
    color: secondary,
    fontFamily: "LexendDeca",
    fontSize: 18,
    lineHeight: 22,
  },
});

export default QuizBox;
