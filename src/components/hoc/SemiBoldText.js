import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  semiboldText: {
    fontFamily: "Nunito_600SemiBold",
    color: colors.text,
  },
});

const SemiBoldText = ({ children, addStyle }) => {
  return (
    <Text style={{ ...styles.semiboldText, ...addStyle }}>{children}</Text>
  );
};

export default SemiBoldText;
