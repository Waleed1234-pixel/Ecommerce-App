//import liraries
import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// create a component
const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>Healthy Foods</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => navigation.navigate("Search")}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
            style={styles.searchBtn}
          >
            <Ionicons
              name="person"
              size={SIZES.xxLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default Welcome;
