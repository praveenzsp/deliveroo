import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type=="featured"]{ 
          ...,
          restaurants[]->{
            ...,
            dishes[]->
          }
        }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <SafeAreaView className="pt-[12%] bg-white px-4 pb-3">
        {/** Header */}
        <View className="flex-row pb-3 space-x-2 items-center">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />
          <View className="flex-1">
            <Text className="text-gray-400 text-xs font-bold">Deliver Now</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <UserIcon size={35} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View className="flex-row items-center">
          <View className="bg-gray-200 h-12 flex-row  space-x-2 items-center px-2">
            <MagnifyingGlassIcon color="gray"/>
            <TextInput
              placeholder="Restaurants and Cuisines"
              keyboardType="default"
              className="w-[70vw]"
            />
          </View>
          <TouchableOpacity className='px-2' onPress={()=>navigation.navigate('Basket')}>
            <ShoppingCartIcon color="#00CCBB"/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* body */}
      <ScrollView>
        <Categories />

        {/* Featured Rows */}
        {featuredCategories.map((featuredCategory) => {

          return (
            <FeaturedRow
              key={featuredCategory._id}
              id={featuredCategory._id}
              title={featuredCategory.name}
              description={featuredCategory.short_description}
              restaurantsArray={featuredCategory.restaurants}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

export default HomeScreen;
