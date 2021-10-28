import { StyleSheet, Dimensions } from "react-native";
import colors from "../../config/colors";

const style = StyleSheet.create({
  searchInputContainer: {
    width: "80%",
    backgroundColor: colors.white,
    position: "relative",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    alignSelf: "center",
    borderRadius: 30,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.1,
    paddingLeft: 25,
    paddingRight: 70,
    paddingVertical: 5,
  },
  searchTextInput: {
    width: "100%",
    fontSize: 18,
    fontFamily: "Nunito_600SemiBold",
    color: colors.text,
  },
  searchInputButtonContainer: {
    position: "absolute",
    right: 10,
  },
  searchInputButton: {
    backgroundColor: colors.pink,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
});

export default style;
