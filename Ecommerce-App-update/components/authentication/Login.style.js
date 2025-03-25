import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 37,
    marginTop: 200,
  },
  header: {
    height: 47,
    marginTop: 20,
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
    paddingHorizontal: SIZES.small,
    paddingHorizontal: 63,
    marginBottom: 23,
    fontWeight: "700",
    backgroundColor: COLORS.secondary,
  },
  loginButton: {
    width: 90,
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
  signupButton: {
    width: 90,
    height: 38,
    backgroundColor: COLORS.primary, // You can change the color for the Sign Up button
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10, // Adjust the margin top as needed
    marginLeft: "auto",
    marginRight: "auto",
  },
  signupButtonText: {
    color: "white", // Adjust the color as needed
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
