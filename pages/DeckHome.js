import React, { Component } from "react";
import { View, Text } from "react-native";
import Appbar from "../components/Appbar";
import { globalStyle as styles } from "../utils/common-styles";
import QuickActionItem from "../components/QuickActionItem";
import { textPrimary, secondary } from "../utils/colors";
import { connect } from "react-redux";

class DeckHome extends Component {
  goBack = () => {
    const { navigation } = this.props;
    navigation.push("home");
  };

  startQuiz = () => {
    const { navigation, id } = this.props;
    navigation.push("quiz", {
      id,
    });
  };

  render() {
    const { deck, cards } = this.props;

    return (
      <View style={styles.main}>
        <Appbar
          title={deck.title ?? "Deck Title"}
          subtitle={`${cards} cards`}
          onBackPressed={this.goBack}
        />
        <Text style={styles.subtitle}>Quick Actions</Text>
        <QuickActionItem
          title="Take Quiz"
          iconName="feather"
          color={textPrimary}
          onPressed={this.startQuiz}
        />
        <QuickActionItem
          title="Add Questions"
          iconName="plus-circle"
          color={secondary}
          onPressed={() => {}}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, { route }) => {
  const { id } = route.params;

  const deck = decks[id];

  return {
    id: id,
    deck,
    cards: deck.questions.length,
  };
};

export default connect(mapStateToProps)(DeckHome);
