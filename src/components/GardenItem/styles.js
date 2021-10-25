import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const style = StyleSheet.create({
  gardenItemContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 20,
    marginVertical: 10,
  },
  gardenItemImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  gardenItemTitle: {
    fontSize: 16,
    color: colors.darkPrimary,
    fontFamily: "Nunito_700Bold",
  },
  gardenItemSubtitle: {
    color: colors.text,
    fontFamily: "Nunito_700Bold",
    fontSize: 14,
  },
  gardenItemButton: {
    marginLeft: "auto",
    fontSize: 14,
    color: colors.text,
  },
});

export default style;
