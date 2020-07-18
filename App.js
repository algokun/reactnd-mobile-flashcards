import React, { Component } from "react";
import * as Font from "expo-font";
import AppNavigation from "./navigation/Navigation";
import { AppLoading } from "expo";
import { View, Dimensions } from "react-native";
import AppStatusBar from "./navigation/StatusBar";
import { primary } from "./utils/colors";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createLocalNotification } from "./utils/notifications";

const customFonts = {
  LexendDeca: require("./assets/fonts/LexendDeca.ttf"),
};

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };

  componentDidMount() {
    this._loadFontsAsync();
    createLocalNotification();
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <View
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        >
          <AppStatusBar backgroundColor={primary} barStyle="dark-content" />
          <AppNavigation />
        </View>
      </Provider>
    );
  }
}
