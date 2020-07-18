import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { globalStyle } from "../utils/common-styles";
import DeckItem from "../components/DeckItem";
import { connect } from "react-redux";
import { handleInitialData } from "../redux/init_state";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { decks } = this.props;
    return (
      <View style={globalStyle.main}>
        <Text style={globalStyle.title}>Your Decks</Text>
        {Object.keys(decks).map((id) => {
          return <DeckItem key={id} id={id} />;
        })}
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => ({ decks });

export default connect(mapStateToProps)(Home);
