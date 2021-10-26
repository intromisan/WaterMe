import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const style = StyleSheet.create({
  reminderButtons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.darkAccent,
    height: "9%",
    borderRadius: 10,
    position: "relative",
    zIndex: 1,
    marginTop: 5,
  },
  reminderButton: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  buttonLeft: {},
  buttonRight: {},
  buttonText: {
    fontFamily: "Nunito_700Bold",
    position: "relative",
  },
  active: {
    width: "47%",
    height: "80%",
    backgroundColor: colors.white,
    position: "absolute",
    zIndex: 2,
    borderRadius: 5,
    shadowColor: "#202322",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { widht: 3, height: 0 },
  },
});

export default style;
