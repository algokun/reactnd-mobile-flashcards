import React, { Component } from "react";
import Appbar from "../components/Appbar";
import { View } from "react-native";
import QuizBox from "../components/QuizBox";
import Button from "../components/Button";
import { globalStyle } from "../utils/common-styles";
import { connect } from "react-redux";

class Quiz extends Component {
  state = {
    currentIndex: 0,
    score: 0,
    showScore: false,
  };

  showNext() {
    let currentIndex = this.state.currentIndex;
    let next = currentIndex + 1;
    let isShowScore = next > this.props.total - 1;

    if (isShowScore) {
      this.setState({
        showScore: true,
      });
      return;
    } else {
      this.setState({
        currentIndex: next,
      });
    }
  }

  wrongAnswer(val) {
    if (val) {
      this.showNext();
      return;
    }

    this.setState((currentState) => ({
      score: currentState.score + 1,
    }));
    this.showNext();
  }

  render() {
    const { questions, total } = this.props;

    const { question, answer } = questions[this.state.currentIndex];

    return (
      <View style={globalStyle.main}>
        <Appbar title="Machine Learning" subtitle="QUIZ" />
        {this.state.showScore ? (
          <View>
            <Text> Your Score : {this.state.score} </Text>
          </View>
        ) : (
          <View>
            <QuizBox
              answer={answer}
              question={question}
              total={total}
              index={this.state.currentIndex + 1}
            />
            <View>
              <Button onPress={() => this.wrongAnswer(false)} title="Correct" />
              <Button
                onPress={() => this.wrongAnswer(true)}
                title="Incorrect"
                type="secondary"
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, { route }) => {
  const { id } = route.params;

  const deck = decks[id];

  return {
    id,
    questions: deck.questions,
    total: deck.questions.length,
  };
};

export default connect(mapStateToProps)(Quiz);
