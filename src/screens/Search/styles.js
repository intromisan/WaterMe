import { StyleSheet, Dimensions } from "react-native";
import colors from "../../config/colors";

const windowHeight = Dimensions.get("window").height;

const style = StyleSheet.create({
  searchBackground: {
    backgroundColor: colors.accent,
    position: "absolute",
    width: 800,
    height: 800,
    borderRadius: 400,
    top: -70,
    left: -190,
  },
  searchContainer: {
    top: windowHeight * 0.3,
    position: "relative",
    // borderWidth: 1,
    // borderColor: "red",
  },
  searchText: {
    color: colors.primary,
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  searchSubtext: {
    alignSelf: "center",
    marginTop: 20,
  },
});

export default style;
