import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "../components/authentication/Login";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default LoginScreen;
