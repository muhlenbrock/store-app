import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ProductInfoProps {
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
}

export default function ProductInfo({ title, price, rating, description }: ProductInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Text style={styles.rating}>{rating.rate.toFixed(1)}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.saveContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Ionicons name="heart-outline" size={16} color="#000" />
          <Text style={styles.saveText}>{10000}k Saved</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8
  },
  discount: {
    fontSize: 14,
    color: 'red'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  rating: {
    marginLeft: 4
  },
  description: {
    marginBottom: 8
  },
  saveContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 20
  },
  saveText: {
    marginLeft: 4
  }
});
