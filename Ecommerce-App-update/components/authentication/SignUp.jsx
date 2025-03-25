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
import styles from "./SignUp.style";
import axios from "axios";

const Sign_Up = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert(
        "Validation Error",
        "Please fill in all the required fields."
      );
    } else {
      const userData = {
        Name: name,
        Email: email,
        Password: password,
      };

      axios
        .post("http://192.168.1.100/api/signup.php", JSON.stringify(userData))
        .then((response) => {
          console.log("Response from server:", response.data);
          if (response.data === "Sign-up successful!") {
            Alert.alert("Success", "Sign-up successful!");
            navigation.navigate("Login");
          } else {
            Alert.alert("Error", "Sign-up failed. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Alert.alert("Error", "An error occurred. Please try again later.");
        });
    }
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>SignUp-Page</Text>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Feather name="user" size={24} color="black" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <View style={styles.iconContainer}>
          <Feather
            name="message-circle"
            size={24}
            color="black"
            style={styles.icon}
          />
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

        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.signupheader}>Already have an account</Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Sign_Up;
