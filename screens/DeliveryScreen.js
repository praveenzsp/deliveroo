import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector((state) => state.restaurant.restaurant);
  return (
    <View className="relative flex-1">
      <SafeAreaView className="bg-[#00CCBB] flex-row justify-between h-[30%] px-4 pt-[15%]">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <XMarkIcon color="white" size={30} />
        </TouchableOpacity>
        <Text className="text-gray-100 text-xl">Order Help</Text>
      </SafeAreaView>

      <View className="bg-white flex-row justify-between p-6 absolute rounded-lg top-[15%] z-10 left-0 right-0 m-auto mx-4">
        <View className="flex gap-3 justify-start">
          <Text className="text-gray-400 text-xl">Estimated Arrival</Text>
          <Text className="font-bold text-4xl">30-40 Minutes</Text>
          <View>
            <Progress.Bar
              width={150}
              animated={true}
              indeterminate={true}
              color="#00CCBB"
            />
          </View>
          <Text className="text-gray-400 text-sm">
            Your order at {restaurant.name} is being prepared
          </Text>
        </View>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/delivery-man-riding-red-scooter-illustration_9845-14.jpg",
          }}
          className="h-20 w-12"
        />
      </View>

      <SafeAreaView className="flex-row justify-between absolute bottom-0 w-full px-4 border-t-[1px] border-gray-200 pt-3 items-center z-10 bg-white py-6">
        <View className="flex-row justify-start gap-3">
          <Image
            source={require("../assets/delivery_boy.jpg")}
            className="h-12 w-12 rounded-full"
          />
          <View className=" pl-2">
            <Text className="text-xl text-gray-600">John Wick</Text>
            <Text className="text-gray-400">Your Rider</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text className="text-xl text-[#00CCBB]">Call</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <View className="">
        <MapView
          initialRegion={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          className="w-full h-full z-0"
          mapType="Standard"
        >
          <Marker
            coordinate={{
              latitude: restaurant.latitude,
              longitude: restaurant.longitude,
            }}
            title={restaurant.name}
            identifier="origin"
            pinColor="red"
          />
        </MapView>
      </View>
    </View>
  );
};

export default DeliveryScreen;
