import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'

const BasketBar = ({restaurantName}) => {
    const items = useSelector(state=>state.basket.items)
    const navigate = useNavigation()

    const getTotalBasketValue = ()=>{
        let totalPrice = 0
        items.forEach(item => {
            totalPrice+=item.price
        });
        // console.log(totalPrice)
        return totalPrice
    }
  return (
    <TouchableOpacity className='w-[90vw] h-16 bg-[#00CCBB] rounded flex-row justify-around items-center ml-auto mr-auto sticky bottom-3 z-10' onPress={()=>{navigate.navigate('Basket',{restaurantName, totalCartValue : getTotalBasketValue()})}}>
      <Text className='text-white font-bold text-2xl bg-[#3584b5fe] px-2 rounded'>{items.length}</Text>
      <Text className='text-white font-bold text-xl'>View Basket</Text>
      <Text className='text-white font-bold text-xl'>₹{getTotalBasketValue()}</Text>
    </TouchableOpacity>
  )
}

export default BasketBar