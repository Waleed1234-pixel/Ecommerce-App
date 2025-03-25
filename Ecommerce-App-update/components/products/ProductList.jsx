import React, { useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import axios from "axios";
import { COLORS, SIZES } from "../../constants";
import ProductCardView2 from "./ProductCardView2";

const ProductList = ({}) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    axios
      .get("http://192.168.1.100/api/getAllProducts.php")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  // Fetch user details
  // useEffect(() => {
  //   axios
  //     .get(`http://192.168.1.100/api/getAllUsers.php`)
  //     .then((response) => {
  //       setUser(response.data);
  //       setIsLoading(false);
  //       console.log("User Data:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user details:", error);
  //       setIsLoading(false);
  //     });
  // }, []);

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
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(product) => product.product_id.toString()}
          renderItem={({ item }) => (
            <ProductCardView2 product={item} user={user} />
          )}
          contentContainerStyle={{
            justifyContent: "space-around",
            marginHorizontal: SIZES.small,
          }}
        />
      )}
    </View>
  );
};

export default ProductList;
