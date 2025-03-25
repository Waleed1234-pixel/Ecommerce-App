import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants";
import { Feather } from "@expo/vector-icons";
import styles from "./Buy.style";
import axios from "axios";

const Buy = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const navigation = useNavigation();
  const [successMessage, setSuccessMessage] = useState(""); // State to store success message

  const handleSubmit = () => {
    // Create an object to send to the server
    const userData = {
      address,
      city,
      country,
      phoneNumber,
      postalCode,
    };

    // Make a POST request to the PHP API to save user information
    axios
      .post("http://192.168.1.100/api/buynow.php", userData)
      .then((response) => {
        console.log("User information saved successfully:", response.data);

        // Reset the input fields
        setAddress("");
        setCity("");
        setCountry("");
        setPhoneNumber("");
        setPostalCode("");

        // Navigate to the desired screen (e.g., "Home" or "Dashboard")
        // Inside handleSubmit function in Buy.js
        navigation.navigate("Home", {
          successMessage:
            "Thank you for your purchase! Your order has been successfully placed.",
        });
      })

      .catch((error) => {
        console.error("Error saving user information:", error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>User Information Form</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Feather name="home" size={24} color="black" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />

        <View style={styles.iconContainer}>
          <Feather name="map-pin" size={24} color="black" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={(text) => setCity(text)}
        />

        <View style={styles.iconContainer}>
          <Feather name="globe" size={24} color="black" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          onChangeText={(text) => setCountry(text)}
        />

        <View style={styles.iconContainer}>
          <Feather name="phone" size={24} color="black" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />

        <View style={styles.iconContainer}>
          <Feather name="map-pin" size={24} color="black" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Postal Code"
          value={postalCode}
          onChangeText={(text) => setPostalCode(text)}
        />

        <TouchableOpacity
          style={styles.loginButton}
          color={COLORS.primary}
          onPress={handleSubmit}
        >
          <Text style={styles.loginButtonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Buy;
