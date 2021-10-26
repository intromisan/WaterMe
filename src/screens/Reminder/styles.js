import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const style = StyleSheet.create({
  reminderEmptyContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  reminderEmptyImage: {
    width: 120,
    height: 120,
  },
  reminderEmptyText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 20,
    color: colors.darkPrimary,
  },
  reminderEmptySubtext: {
    fontFamily: "Nunito_700Bold",
    fontSize: 15,
    color: colors.text,
    marginTop: 5,
  },
  reminderAddButton: {
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 32,
    marginTop: 30,
  },
  reminderAddButtonText: {
    color: colors.white,
    fontSize: 50,
  },
});

export default style;
