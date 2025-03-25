import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const style = StyleSheet.create({
  container: {
    width: 150,
    height: 220,
    marginEnd: 25,
    marginBottom: 100,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    flex: 1,
    width: 140,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontSize: SIZES.large,
    marginBottom: 1,
  },
  supplier: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: {
    fontWeight: "700",
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default style;
