import React, { useState, useEffect, useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import Toast from "react-native-toast-message";
import axios from "axios"; // Import Axios

const AddToCart = ({ product, Email }) => {
  // Function to add a product to the cart
  const addToCart = async () => {
    try {
      // Use the userEmail state for the user's email
      const userId = Email; // Email of the current logged-in user
      const productId = product.product_id; // Use the product_id from your data

      // Make an API request to add the product to the cart
      const response = await axios.post(
        "http://192.168.1.100/api/add-to-cart.php",
        { userId, productId }
      );

      // Check if the API request was successful
      if (response.status === 200) {
        // Show a success toast message
        Toast.show({
          type: "success",
          position: "top",
          text1: "Item Added",
          text2: "The item has been added to your cart.",
          visibilityTime: 2000,
          autoHide: true,
        });
      } else {
        // Show an error toast message
        Toast.show({
          type: "error",
          position: "top",
          text1: "Error",
          text2: "Failed to add the item to your cart.",
          visibilityTime: 2000,
          autoHide: true,
        });
      }
    } catch (error) {
      // Handle any errors from the API request
      console.error("Error adding item to cart:", error);
      // Show an error toast message
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Failed to add the item to your cart.",
        visibilityTime: 2000,
        autoHide: true,
      });
    }
  };

  return (
    <TouchableOpacity onPress={addToCart}>
      <Text>Add to Cart</Text>
    </TouchableOpacity>
  );
};

export default AddToCart;
