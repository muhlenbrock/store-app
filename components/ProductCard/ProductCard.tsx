import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { s } from './ProductCardStyle';

interface ProductCardProps {
  product: Product;
  onPressProductCard?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPressProductCard }) => {
  return (
    <TouchableOpacity style={s.card} onPress={onPressProductCard}>
      <Image source={{ uri: product.image }} style={s.image} />
      <View style={s.details}>
        <Text style={s.title}>{product.title}</Text>
        <View style={s.priceContainer}>
          <Text style={s.price}>${product.price.toFixed(2)}</Text>
        </View>
        <View style={s.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={s.rating}>{product.rating.rate.toFixed(1)}</Text>
        </View>
      </View>
      <TouchableOpacity style={s.favoriteButton}>
        <Ionicons name="heart-outline" size={24} color="#888" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;
