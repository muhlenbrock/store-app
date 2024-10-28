import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
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
  