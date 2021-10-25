import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const style = StyleSheet.create({
  screenTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 10,
    marginTop: "20%",
  },
  screenSubtitle: {
    textTransform: "uppercase",
    fontSize: 10,
    fontFamily: "Nunito_700Bold",
    color: colors.darkPrimary,
    marginBottom: -5,
  },
  screenTitle: {
    fontFamily: "Nunito_700Bold",
    fontSize: 35,
    color: colors.darkPrimary,
  },
  wishlist: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    height: 40,
    width: 110,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  wishlistText: {
    color: colors.primary,
    fontFamily: "Nunito_700Bold",
    fontSize: 14,
  },
});

export default style;
