import { TouchableOpacity, Text } from "react-native";
import { globalStyle as styles } from "../utils/common-styles";
import React from "react";

const Button = ({ onPress, title, disabled = false }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={disabled ? styles.disabledCTA : styles.primaryCTA}
    >
      <Text style={disabled ? styles.disabledCTAText : styles.primaryCTAText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
