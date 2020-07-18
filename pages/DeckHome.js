import React from "react";
import { View, Text } from "react-native";
import Appbar from "../components/Appbar";
import { globalStyle as styles } from "../utils/common-styles";
import QuickActionItem from "../components/QuickActionItem";
import { textPrimary, secondary } from "../utils/colors";

const DeckHome = () => {
  return (
    <View>
      <Appbar title="Machine Learning" subtitle="2 Cards" />
      <Text style={styles.subtitle}>Quick Actions</Text>
      <QuickActionItem
        title="Take Quiz"
        iconName="feather"
        color={textPrimary}
        onPressed={() => {}}
      />
      <QuickActionItem
        title="Add Questions"
        iconName="plus-circle"
        color={secondary}
        onPressed={() => {}}
      />
    </View>
  );
};

export default DeckHome;
