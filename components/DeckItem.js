import React from "react";
import { Text, View } from "react-native";
import { textPrimary } from "../utils/colors";
import { Feather } from "@expo/vector-icons";
import { globalStyle as styles } from "../utils/common-styles";
const DeckItem = ({ cards, title }) => {
  return (
    <View style={styles.deckItem}>
      <View style={styles.deckInfo}>
        <Text style={styles.deckCards}>{cards} cards</Text>
        <Text style={styles.deckTitle}>{title}</Text>
      </View>
      <Feather
        name="arrow-right-circle"
        color={textPrimary}
        size={24}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

export default DeckItem;
