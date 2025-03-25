import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import { ActivityIndicator } from "react-native";

import styles from "./productRow.style";
import axios from "axios";

const ProductRow = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch two random products using your API
    fetch("http://192.168.1.100/api/getRandomProduct.php") // Change the API endpoint
      .then((response) => response.json())
      .then((data) => {
        setRandomProducts(data); // Update to use an array of products
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching random products:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // Make a GET request to the PHP API endpoint
    axios
      .get("http://192.168.1.100/api/getUserEmail.php")
      .then((response) => {
        if (response.data.email) {
          setUser(response.data.email);
          console.log("User Email:", response.data.email);
        } else {
          // Handle the case where the user is not logged in
          setUser("User not logged in");
        }
      })
      .catch((error) => {
        console.error("Error fetching user email:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          data={randomProducts}
          numColumns={2}
          renderItem={({ item }) => (
            <ProductCardView product={item} user={user} />
          )}
          keyExtractor={(item) => item.product_id.toString()}
        />
      )}
    </View>
  );
};

export default ProductRow;
