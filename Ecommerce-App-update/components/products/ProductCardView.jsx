import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import style from "./ProductCardView.style";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Alert } from "react-native";

const ProductCardView = ({ product, user }) => {
  const navigation = useNavigation();
  const addToCart = () => {
    const userId = user; // Replace with the actual userId
    const productId = product.product_id; // Replace with the actual productId

    // Log the userId and productId to the console
    console.log("userId:", userId);
    console.log("productId:", productId);

    axios
      .get(
        `http://192.168.1.100/api/addToCart.php?userId=${userId}&productId=${productId}`
      )
      .then((response) => {
        if (response.data.message) {
          // Item added to cart successfully!
          console.log("Item added to cart successfully!");
          // Show an alert message
          Alert.alert(
            "Success",
            "Item added to cart successfully!",
            [
              {
                text: "OK",
                onPress: () => {
                  // You can add additional actions here if needed
                },
              },
            ],
            { cancelable: false }
          );
        } else {
          console.error("Error adding to cart:", response.data.error);
          // Handle the error, display an error message, or take other actions
        }
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        // Handle network errors or other issues here
      });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        console.log(user);
        console.log("productId:", product.product_id);
        navigation.navigate("ProductDetails", {
          productId: product.product_id,
          userId: user, // Pass the user prop to ProductDe
        });
      }}
    >
      <View style={style.container}>
        <View style={style.imageContainer}>
          <Image
            source={{
              uri: product.imageUrl,
            }}
            style={style.image}
          />
        </View>
        <View style={style.details}>
          <Text style={style.title} numberOfLines={0}>
            {product.title}
          </Text>
          <Text style={style.supplier} numberOfLines={0}>
            {product.supplier}
          </Text>
          <Text style={style.price} numberOfLines={0}>
            {product.price}
          </Text>
        </View>
        <TouchableOpacity style={style.addBtn} onPress={addToCart}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
