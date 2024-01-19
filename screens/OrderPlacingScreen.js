import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const OrderPlacingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);


  return (
    <View className="flex-1 bg-white">
      <Image
        source={{
          uri: "https://i.pinimg.com/474x/29/3a/cb/293acb63f7ed1f5d6f19a7c7cf4150f1.jpg",
        }}
        className="w-full h-[70vh]"
      />
      <Text className="text-center text-xl text-gray-400 my-10">
        Wait...we're placing your order
      </Text>
      <View className="ml-auto mr-auto">
        <Progress.Bar
          width={300}
          animated={true}
          indeterminate={true}
          color="#00CCBB"
        />
      </View>
    </View>
  );
};

export default OrderPlacingScreen;
