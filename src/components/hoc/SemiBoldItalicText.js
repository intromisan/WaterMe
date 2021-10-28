import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  semiBoldItalicText: {
    fontFamily: "Nunito_600SemiBold_Italic",
    color: colors.text,
  },
});

const SemiBoldItalicText = ({ children, addStyle }) => {
  return (
    <Text style={{ ...styles.semiBoldItalicText, ...addStyle }}>
      {children}
    </Text>
  );
};

export default SemiBoldItalicText;
