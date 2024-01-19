import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../redux/features/basketSlice";

const Dish = ({ id, name, price, description, imageUrl }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  // console.log(items)
  const [isPressed, setIsPressed] = useState(false);

  const handleAddToBasket = () => {
    dispatch(addToBasket({ id, name, price, description, imageUrl }));
  };

  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(name));
  };
  // console.log(id)
  return (
    <View className="flex-row border-b-[1px] border-gray-200 py-6 justify-evenly">
      <View>
        <Text className="text-lg font-semibold py-1">{name}</Text>
        <Text className="text-sm text-gray-400 py-1 max-w-[80%]">
          {description} {description} {description} {description} {description}{" "}
          {description} {description} {description} {description} {description}{" "}
          {description}
        </Text>
        <Text className="text-sm text-gray-400 py-1">₹ {price}</Text>
        {isPressed && (
          <View className="flex-row items-center py-2">
            <TouchableOpacity
              className="bg-[#00CCBB] rounded-full px-4"
              disabled={!items.length}
              onPress={handleRemoveFromBasket}
            >
              <Text className="text-3xl text-white">-</Text>
            </TouchableOpacity>
            <Text className="px-2 text-xl">
              {items.filter((item) => item.id === id).length}
            </Text>
            <TouchableOpacity
              className="bg-[#00CCBB] px-3 rounded-full"
              onPress={handleAddToBasket}
            >
              <Text className="text-3xl text-white">+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View>
        <Image
          source={{
            uri: urlFor(imageUrl).url(),
          }}
          className="h-20 w-20 bg-gray-400 mb-3 rounded"
        />
        <TouchableOpacity
          className="border-[1px] border-[#00CCBB] px-3 py-2 rounded-full"
          onPress={() => {
            setIsPressed(!isPressed);
          }}
        >
          <Text className="text-center">ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

export default Dish;
