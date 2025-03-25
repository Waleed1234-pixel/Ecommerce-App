import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styles from "./Login.style";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert(
        "Validation Error",
        "Please fill in all the required fields."
      );
    } else {
      const data = {
        Email: email,
        Password: password,
      };

      const phpEndpoint = "http://192.168.1.100/api/login.php";

      axios
        .post(phpEndpoint, data)
        .then((response) => {
          // Handle the response from the server
          if (response.data === "Login successful!") {
            console.log("Login successful");
            navigation.navigate("Home");
          } else {
            Alert.alert("Login Error", "Invalid email or password.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Alert.alert("Error", "An error occurred while logging in.");
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login-Page</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Feather name="user" size={24} color="black" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <View style={styles.iconContainer}>
          <Feather name="lock" size={24} color="black" style={styles.icon} />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
