import React from "react";
import { View, Text, TextInput } from "react-native";
import Button from "../components/Button";
import { globalStyle as styles } from "../utils/common-styles";

const AddDeck = () => {
  const [value, onChangeText] = React.useState("");
  return (
    <View style = {styles.main}>
      <Text style={styles.title}>Add Deck</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Title"
        value={value}
      />
      <Button
        onPress={() => {}}
        title="Add Deck"
        disabled={value.length === 0}
      />
    </View>
  );
};

export default AddDeck;
