import HomeScreen from '@/screens/home/HomeScreen';
import ProductDetailScreen from '@/screens/product-detail/ProductDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
