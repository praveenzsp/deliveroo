import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({id ,title, description, restaurantsArray}) => {
  // console.log(title)
  return (
    <>
      <View className="flex-row justify-between px-4 mt-6">
        <View className="space-y-1">
          <Text className="font-bold text-2xl">{title}</Text>
          <Text className="text-gray-600 font-xs">{description}</Text>
        </View>
        <ArrowRightIcon size={30} color="#00CCBB" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          marginBottom: 10,
        }}
      >
        {restaurantsArray.map((restaurantInfo) => {
          // console.log(restaurantInfo.short_description)
          return (
            <RestaurantCard
              key={restaurantInfo._id}
              name={restaurantInfo.name}
              rating={restaurantInfo.rating}
              address={restaurantInfo.address}
              imageUrl={restaurantInfo.image}
              description={restaurantInfo.short_description}
              dishes={restaurantInfo.dishes}
              latitude={restaurantInfo.latitude}
              longitude={restaurantInfo.longitude}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

export default FeaturedRow;
