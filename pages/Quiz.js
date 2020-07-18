import React, { Component } from "react";
import { connect } from "react-redux";
import QuizWrapper from "./QuizWrapper";

import {
  removeNotifications,
  createLocalNotification,
} from "../utils/notifications";

class Quiz extends Component {
  componentDidMount() {
    removeNotifications().then(createLocalNotification);
  }

  goBack = () => {
    const { navigation, id } = this.props;
    navigation.push("deck", {
      id: id,
    });
  };

  render() {
    return <QuizWrapper deck={this.props.deck} onBack={this.goBack} />;
  }
}

const mapStateToProps = ({ decks }, { route }) => {
  const { id } = route.params;

  return {
    deck: decks[id],
    id,
  };
};

export default connect(mapStateToProps)(Quiz);
