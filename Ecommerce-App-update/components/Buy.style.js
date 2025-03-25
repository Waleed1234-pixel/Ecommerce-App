import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 37,
    marginTop: 200,
  },
  header: {
    fontSize: 25,
    marginBottom: 44,
    color: "black",
    fontWeight: "bold",
    fontSize: SIZES.xxLarge - 9,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 38,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 85,
    marginBottom: 23,
    fontWeight: "700",
    backgroundColor: COLORS.secondary,
  },
  loginButton: {
    width: "100%",
    height: 38,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  loginButtonText: {
    color: "white",
    flex: 1,
  },
  iconContainer: {
    justifyContent: "center",
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
    top: 17,
    right: 100,
    opacity: 0.5,
  },
  icon: {
    position: "absolute",

    marginRight: SIZES.small,
  },
});

export default styles;
