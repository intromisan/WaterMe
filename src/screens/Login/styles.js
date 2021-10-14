import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const style = StyleSheet.create({
  loginScreen: {
    backgroundColor: colors.accent,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    backgroundColor: colors.white,
    width: "90%",
    height: 480,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 20,
  },
  loginTitle: {
    fontSize: 65,
    textAlign: "center",
    color: colors.primary,
    marginBottom: -20,
    fontFamily: "Scheherazade_700Bold",
  },
  loginSubtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.darkPrimary,
    fontFamily: "Nunito_600SemiBold",
  },
  inputView: {
    marginTop: 30,
  },
  inputWrap: {
    position: "relative",
  },
  input: {
    minWidth: "85%",
    fontFamily: "Nunito_600SemiBold",
    paddingLeft: 50,
    paddingRight: 20,
    paddingVertical: 18,
    backgroundColor: colors.accent,
    color: colors.text,
    borderRadius: 30,
    fontSize: 16,
    marginBottom: 10,
  },
  inputIcon: {
    position: "absolute",
    zIndex: 2,
    top: 20,
    left: 20,
  },
  noAccount: {
    color: colors.text,
    fontFamily: "Nunito_600SemiBold",
    marginTop: 5,
    marginBottom: 5,
  },
  linkText: {
    color: colors.primary,
    fontWeight: "700",
    fontFamily: "Nunito_700Bold",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: colors.primary,
    minWidth: "85%",
    borderRadius: 30,
    paddingVertical: 22,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: "Nunito_700Bold",
    textAlign: "center",
    fontWeight: "600",
  },
});

export default style;
