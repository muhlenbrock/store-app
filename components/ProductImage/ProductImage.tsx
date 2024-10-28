import React from 'react';
import { Image, View } from 'react-native';
import { s } from './ProductImageStyle';

interface ProductImageProps {
  imageUri: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUri }) => {
  return (
    <View style={s.imageContainer}>
      <Image source={{ uri: imageUri }} style={s.image} resizeMode="contain" />
    </View>
  );
};

export default ProductImage;
