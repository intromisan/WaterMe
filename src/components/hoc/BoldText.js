import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  boldText: {
    fontFamily: "Nunito_700Bold",
    color: colors.text,
  },
});

const BoldText = ({ children, addStyle }) => {
  return <Text style={{ ...styles.boldText, ...addStyle }}>{children}</Text>;
};

export default BoldText;
