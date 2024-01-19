import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { urlFor } from "../sanity";
import { ArrowLeftIcon, ChevronRightIcon } from "react-native-heroicons/solid";
import Dish from "../components/Dish";
import { useSelector, useDispatch } from "react-redux";
import BasketBar from "../components/BasketBar";
import { setRestaurant } from "../redux/features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        name,
        rating,
        address,
        imageUrl,
        description,
        dishes,
        latitude,
        longitude,
      })
    );
  }, []);

  const {
    params: {
      id,
      name,
      rating,
      address,
      imageUrl,
      description,
      dishes,
      latitude,
      longitude,
    },
  } = useRoute();
  const items = useSelector((state) => state.basket.items);

  return (
    <>
      <ScrollView>
        <View className="relative bg-gray-300">
          <Image
            source={{
              uri: urlFor(imageUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            className="bg-white absolute left-4 top-10 p-2 rounded-full"
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <ArrowLeftIcon size={23} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="px-4">
          <View className="pt-2">
            <Text className="font-bold text-3xl pt-2">{name}</Text>
            <View className="flex-row gap-6 pt-1">
              <Text className="text-[#00CCBB] text-sm">
                ⭐️ {rating} offers
              </Text>
              <Text className="text-gray-500 text-sm">📍 Nearby {address}</Text>
            </View>
            <Text className="text-gray-500 text-md py-4">
              {description} {description} {description} {description}{" "}
              {description} {description} {description}
            </Text>
          </View>

          <TouchableOpacity className="flex-row justify-between py-4 border-t-[1px] border-gray-200">
            <View className="flex-row justify-between gap-6">
              <ArrowLeftIcon size={15} color="gray" />
              <Text className="font-bold text-md">Have a food allergy?</Text>
            </View>
            <ChevronRightIcon size={15} color="#00CCBB" />
          </TouchableOpacity>

          {/* Menu */}
          <View>
            <Text className="font-bold text-xl pt-6 mb-3">Menu</Text>
            {dishes.map((dish) => {
              return (
                <>
                  <Dish
                    key={dish._id}
                    id={dish._id}
                    name={dish.name}
                    price={dish.price}
                    description={dish.short_description}
                    imageUrl={dish.image}
                  />
                </>
              );
            })}
          </View>
        </View>
      </ScrollView>
      {items.length > 0 && <BasketBar restaurantName={name} />}
    </>
  );
};

export default RestaurantScreen;
