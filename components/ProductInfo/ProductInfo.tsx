import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { s } from './ProductInfoStyle';

interface ProductInfoProps {
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ title, price, rating, description }) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>{title}</Text>
      <View style={s.priceContainer}>
        <Text style={s.price}>${price.toFixed(2)}</Text>
      </View>
      <View style={s.ratingContainer}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Text style={s.rating}>{rating.rate.toFixed(1)}</Text>
      </View>
      <Text style={s.description}>{description}</Text>
      <View style={s.saveContainer}>
        <TouchableOpacity style={s.saveButton}>
          <Ionicons name="heart-outline" size={16} color="#000" />
          <Text style={s.saveText}>{10000}k Saved</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductInfo;
