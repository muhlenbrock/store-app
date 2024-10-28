import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      margin: 8,
      overflow: 'hidden',
      flex: 1,
      paddingTop: 20
    },
    image: {
      width: '90%',
      height: 150,
      resizeMode: 'contain',
      alignSelf: 'center'
    },
    details: {
      padding: 12
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 4
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 8
    },
    originalPrice: {
      fontSize: 14,
      color: '#888',
      textDecorationLine: 'line-through'
    },
    discountBadge: {
      backgroundColor: '#FF4136',
      borderRadius: 4,
      padding: 4,
      marginLeft: 8
    },
    discountText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold'
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    rating: {
      marginLeft: 4,
      fontWeight: '600'
    },
    reviews: {
      color: '#888',
      marginLeft: 4
    },
    favoriteButton: {
      position: 'absolute',
      top: 8,
      right: 8,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      padding: 4
    }
  });