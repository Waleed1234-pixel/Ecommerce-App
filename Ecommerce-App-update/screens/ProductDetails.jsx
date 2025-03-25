import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import styles from "./ProductDetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const ProductDetails = ({ navigation }) => {
  const route = useRoute();

  const { productId, userId } = route.params;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);

  // console.log(userId);
  // console.log(productId);

  // First useEffect for fetching product details
  useEffect(() => {
    axios
      .get(
        `http://192.168.1.100/api/getProductDetails.php?product_id=${productId}`
      )
      .then((response) => {
        console.log("API Response:", response.data);
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setIsLoading(false);
      });
  }, [productId]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={33} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <>
          <Image source={{ uri: product.imageUrl }} style={styles.image} />

          <View style={styles.details}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{product.title}</Text>
              <View style={styles.priceWrapper}>
                <Text style={styles.price}>{product.price}</Text>
              </View>
            </View>

            <View style={styles.ratingRow}>
              <View style={styles.rating}>
                {[1, 2, 3, 4, 5].map((index) => (
                  <Ionicons key={index} name="star" size={24} color="gold" />
                ))}
                <Text style={styles.ratingText}>(4.9)</Text>
              </View>
              <View style={styles.rating}>
                <TouchableOpacity onPress={() => increment()}>
                  <SimpleLineIcons name="plus" size={20} />
                </TouchableOpacity>
                <Text style={styles.ratingText}> {count} </Text>

                <TouchableOpacity onPress={() => decrement()}>
                  <SimpleLineIcons name="minus" size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.descriptionWrapper}>
              <Text style={styles.description}>Description</Text>
              <Text style={styles.descText}>{product.description}</Text>
            </View>

            <View style={{ marginBottom: SIZES.small }}>
              <View style={styles.location}>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons name="location-outline" size={20} />
                  <Text>{product.product_location}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    size={20}
                  />
                  <Text> Free Delivery</Text>
                </View>
              </View>
            </View>

            <View style={styles.cartRow}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("buynow");
                }}
                style={styles.cartBin}
              >
                <Text style={styles.cartTitle}>BUY NOW</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  console.log("productId:", product.product_id);
                  navigation.navigate("Cart", {
                    productId: product.product_id,
                    userId: userId, // Pass the user prop to ProductDe
                  });
                }}
                style={styles.addCart}
              >
                <Fontisto
                  name="shopping-bag"
                  size={22}
                  color={COLORS.lightWhite}
                />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default ProductDetails;
