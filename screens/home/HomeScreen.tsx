import ErrorFallbackComponent from '@/components/ErrorFallback/ErrorFallback';
import ProductCard from '@/components/ProductCard/ProductCard';
import { primaryColor } from '@/constants/Colors';
import {
  fetchProducts,
  productListData,
  productListError,
  productListLoading
} from '@/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/hooksRedux';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { s } from './HomeScreenStyle';

type HomeScreenScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
  const [isGridView, setIsGridView] = useState(true);
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const productList = useAppSelector(productListData);
  const productListLoadingState = useAppSelector(productListLoading);
  const productListErrorState = useAppSelector(productListError);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <View
      style={[
        s.container,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right
        }
      ]}
    >
      <View style={s.header}>
        <View style={{ flex: 1 }}>
          <Text style={s.title}>{productList?.length || 0} Productos</Text>
          <Text style={s.subtitle}>Pensados en tus gustos</Text>
        </View>

        <View style={s.viewToggle}>
          <TouchableOpacity onPress={() => setIsGridView(false)}>
            <Ionicons name="list" size={24} color={isGridView ? '#ccc' : '#000'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsGridView(true)}>
            <Ionicons name="grid" size={24} color={isGridView ? '#000' : '#ccc'} />
          </TouchableOpacity>
        </View>
      </View>
      {productListErrorState && (
        <ErrorFallbackComponent
          resetError={() => {
            dispatch(fetchProducts());
          }}
        />
      )}
      {productListLoadingState ? (
        <View style={s.loadingContainer}>
          <ActivityIndicator size="large" color={primaryColor} />
        </View>
      ) : (
        <FlatList
          data={productList}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPressProductCard={() => {
                navigation.navigate('ProductDetail', { ...item });
              }}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
          numColumns={isGridView ? 2 : 1}
          key={isGridView ? 'grid' : 'list'}
        />
      )}
    </View>
  );
}
