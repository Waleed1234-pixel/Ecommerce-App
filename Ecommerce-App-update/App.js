import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { Cart, ProductDetails, NewRivals } from "./screens";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import BuyNow from "./screens/BuyNow";
import SignUpScreen from "./screens/SignUpScreen";
import Profile from "./screens/profile";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer initialRouteName="Sign_Up">
      <Stack.Navigator>
        <Stack.Screen
          name="Sign_Up"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="buynow"
          component={BuyNow}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductList"
          component={NewRivals}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
