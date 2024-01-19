import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const ProfileScreen = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigation = useNavigation();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User Signed Out");
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView className="relative flex-1 mx-4 justify-center items-center gap-6">
      <TouchableOpacity
        className="bg-white absolute left-4 top-20 p-2 rounded-full"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <ArrowLeftIcon size={23} color="#00CCBB" />
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg",
          width: 200,
          height: 200,
        }}
        className="rounded-full"
      />
      <Text className="text-lg text-gray-500">{user?.email}</Text>
      <TouchableOpacity
        className="py-4 bg-orange-500 z-10  rounded-lg px-8"
        onPress={() => {
          handleSignOut();
        }}
      >
        <Text className="text-white text-center text-xl tracking-wider">
          Sign Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
