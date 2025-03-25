import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const style = StyleSheet.create({
  container: {
    width: 155,
    height: 210,
    marginEnd: 16,
    marginTop: 72,
    marginBottom: 10,
    borderRadius: SIZES.large,
    backgroundColor: COLORS.secondary,
    alignContent: "center",
  },
  imageContainer: {
    flex: 1,
    width: 135,
    marginLeft: SIZES.small / 1,
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
