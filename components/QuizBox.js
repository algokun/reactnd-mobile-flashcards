import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { surface, textPrimary, primary, secondary } from "../utils/colors";

const QuizBox = ({ question, answer, index, total }) => {
  const [showAnswer, toggleAnswer] = React.useEffect(false);

  return (
    <View style={styles.quizBox}>
      <Text style={styles.counter}>{`${index}/${total}`}</Text>
      <Text style={styles.question}>{question}</Text>
      {showAnswer && <Text style={styles.counter}>{answer}</Text>}
      <TouchableOpacity
        onPress={showAnswer ? toggleAnswer(false) : toggleAnswer(true)}
      >
        <Text style={styles.flatButton}>
          {showAnswer ? "Hide Answer" : "View Answer"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quizBox: {
    padding: 30,
    backgroundColor: surface,
    borderRadius: 10,
    marginTop: 50,
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
