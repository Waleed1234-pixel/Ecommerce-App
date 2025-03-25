import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Sign_Up from "../components/authentication/SignUp";

const SignUpScreen = () => {
  return (
    <SafeAreaView>
      <Sign_Up />
    </SafeAreaView>
  );
};

export default SignUpScreen;
