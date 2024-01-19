import { TouchableOpacity, Text, Image, View } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-60 w-60 rounded"
        style={{ width: 90, height: 90 }}
      />
      <Text className="absolute bottom-1 left-1 text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
