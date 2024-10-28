import Header from '@/components/Header/Header';
import ProductImage from '@/components/ProductImage/ProductImage';
import ProductInfo from '@/components/ProductInfo/ProductInfo';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ProductDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetail'
>;
type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
interface Props {
  navigation: ProductDetailScreenNavigationProp;
  route: ProductDetailScreenRouteProp;
}

export default function ProductDetailScreen({ route, navigation }: Props) {
  const { image, title, price, rating, description } = route.params;
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
        }
      ]}
    >
      <ScrollView>
        <Header
          onPressGoBack={() => {
            navigation.goBack();
          }}
        />
        <ProductImage imageUri={image} />
        <ProductInfo title={title} price={price} rating={rating} description={description} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
