import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useSelector, useDispatch } from "react-redux";
import { urlFor } from "../sanity";
import { removeFromBasket } from "../redux/features/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.basket.items);
  const uniqueItems = items.filter((obj, index) => {
    return index === items.findIndex((o) => obj.id === o.id);
  });
  const restaurant = useSelector(state=>state.restaurant.restaurant)

  const handleRemove = (name) => {
    dispatch(removeFromBasket(name));
  };

  const getTotalBasketValue = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.price;
    });
    // console.log(totalPrice)
    return totalPrice;
  };

  return (
    <>
      {uniqueItems.length > 0 ? (
        <View className="relative flex-1">
          <View className="mt-20 flex items-center border-b-[1px] border-gray-200 py-3">
            <Text className="font-bold text-xl">Basket</Text>
            <Text className="text-gray-400">{restaurant.name}</Text>
            <TouchableOpacity
              className="bg-[#00CCBB] absolute left-4 top-0 p-2 rounded-full"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ArrowLeftIcon size={23} color="white" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between px-4 mt-6">
            <View className="flex-row items-center justify-start gap-4">
              <Image
                source={{
                  uri: "https://links.papareact.com/wru",
                }}
                className="h-7 w-7 bg-gray-300 rounded-full"
              />
              <Text className="text-mds">Delivery in 30-40 min</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-[#00CCBB] text-md">Change</Text>
            </TouchableOpacity>
          </View>

          {uniqueItems.map((uniqueItem) => {
            return (
              <View
                className="flex-row px-4 mt-6 items-center justify-between"
                key={uniqueItem.id}
              >
                <View className="flex-row items-center gap-3">
                  <Text className="text-[#00CCBB] text-lg">
                    {items.reduce(
                      (count, item) =>
                        item.id == uniqueItem.id ? count + 1 : count,
                      0
                    )}{" "}
                    x
                  </Text>
                  <Image
                    source={{
                      uri: urlFor(uniqueItem.imageUrl).url(),
                    }}
                    className="h-12 w-12 rounded-full"
                  />
                  <Text className="text-lg">{uniqueItem.name}</Text>
                </View>
                <View className="flex-row gap-4">
                  <Text className="text-gray-500">₹{uniqueItem.price}</Text>
                  <TouchableOpacity onPress={() => handleRemove(uniqueItem.name)}>
                    <Text className="text-[#00CCBB] text-md">Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}

          <View className="px-4 flex justify-between gap-6 bottom-4 border-t-[1px] border-gray-200 absolute w-[105%]">
            <View className="flex-row gap-0 justify-between">
              <Text className="text-sm text-gray-400">Subtotal</Text>
              <Text className="text-sm text-gray-400">
                ₹{getTotalBasketValue()}
              </Text>
            </View>
            <View className="flex-row  justify-between">
              <Text className="text-sm text-gray-400">Delivery Fee</Text>
              <Text className="text-sm text-gray-400">
                {getTotalBasketValue() > 0 ? "₹20" : "₹0"}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text>Order Total</Text>
              <Text className="font-extrabold">
                ₹{getTotalBasketValue() + (getTotalBasketValue() > 0 ? 20 : 0)}
              </Text>
            </View>
            <TouchableOpacity className="bg-[#00CCBB] rounded-lg py-4 text-center" onPress={()=>navigation.navigate('Order-Placing')}>
              <Text className="text-white font-bold text-lg text-center">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View className='flex-1 justify-center items-center bg-white'>
          <Image source={{
            uri : 'https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png'
          }}
          className='h-80 w-80'
          />
          <Text className='text-gray-400 text-xl py-3'>Nothing in your cart</Text>
          <TouchableOpacity  className=' bg-[#00CCBB] py-3 text-center rounded-lg px-12' onPress={()=>navigation.navigate('Home')}>
            <Text className='text-white text-lg'>Go Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default BasketScreen;
