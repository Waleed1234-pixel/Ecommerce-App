import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet } from "react-native";
import axios from "axios";

const Profile = () => {
  // Define state variables to store user details
  const [userEmail, setUserEmail] = useState(null); // State to store user email
  const [userDetails, setUserDetails] = useState(null); // State to store user details
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Make a GET request to the `getUserEmail.php` API to get the user's email
    axios
      .get("http://192.168.1.100/api/getUserEmail.php")
      .then((response) => {
        if (response.data.email) {
          // User email fetched successfully
          setUserEmail(response.data.email);

          // Now, use the email to construct the URL for `getUserDetails.php` API
          const apiUrl = `http://192.168.1.100/api/getUserDetails.php?email=${response.data.email}`;

          // Make a GET request to the constructed URL to get user details
          axios
            .get(apiUrl)
            .then((detailsResponse) => {
              if (detailsResponse.data.email) {
                // User details fetched successfully
                setUserDetails(detailsResponse.data);
                setIsLoading(false);
              } else {
                // Handle the case where the user is not found
                setUserDetails({ email: "User not found" });
                setIsLoading(false);
              }
            })
            .catch((error) => {
              console.error("Error fetching user details:", error);
              setIsLoading(false);
            });
        } else {
          // Handle the case where the user is not logged in
          setUserEmail("User not logged in");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching user email:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Profile</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM=",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>{userDetails.name}</Text>
          <View style={styles.labelValue}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{userDetails.email}</Text>
          </View>
          <View style={styles.labelValue}>
            <Text style={styles.label}>Password:</Text>
            <Text style={styles.value}>{userDetails.password}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f2f2f2", // Background color matching the theme
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "skyblue",
    borderRadius: 16,
    padding: 20, // Increased padding
    alignItems: "center",
  },
  profileImage: {
    width: 120, // Increased image size
    height: 120, // Increased image size
    borderRadius: 60, // Increased border radius
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#3498db",
  },
  userName: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: "bold",
  },
  labelValue: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    color: "#555",
  },
  value: {
    marginLeft: 5,
    color: "#333",
  },
});

export default Profile;
