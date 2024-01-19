import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon, LocationIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({id, name, rating, address, imageUrl, description, dishes, latitude, longitude }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id, // this is restaurant id
          name,
          rating,
          address,
          imageUrl,
          description,
          dishes,
          latitude, longitude 
        });
      }}
      className="bg-white mt-4 mr-2 shadow-md"
    >
      <Image
        source={{
          uri: urlFor(imageUrl).url(),
        }}
        className="rounded h-36 w-64"
      />
      <View className="pl-2 space-y-1 pb-3">
        <Text className="font-bold text-xl pt-2">{name}</Text>
        <Text className="text-[#00CCBB] text-xs">⭐️ {rating} Offers</Text>
        <Text className="text-gray-500 text-xs">📍 Nearby {address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
