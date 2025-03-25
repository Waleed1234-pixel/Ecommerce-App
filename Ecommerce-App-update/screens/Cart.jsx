import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import axios from "axios";
import { COLORS, SIZES } from "../constants";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const route = useRoute();
  const { productId, userId } = route.params;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(
        `http://192.168.1.100/api/view.php?userId=${userId}&productId=${productId}`
      )
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setIsLoading(false);
      });
  }, [productId, userId]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <View style={styles.card}>
          {product.title && product.price ? (
            <>
              <Text style={styles.heading}>Product Details</Text>
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.productPrice}>Price: ${product.price}</Text>
              <TouchableOpacity
                style={styles.buyButton}
                onPress={() => {
                  navigation.navigate("buynow");
                }}
              >
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.cartEmptyText}>Cart Empty</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: "80%",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 16,
  },
  buyButton: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 8,
  },
  buyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  cartEmptyText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Cart;
