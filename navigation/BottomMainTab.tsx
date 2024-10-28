import { primaryColor } from '@/constants/Colors';
import ProfileScreen from '@/screens/profile/Profile';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStackScreen from './stack/HomeStack';
const Tab = createBottomTabNavigator();

export default function BottomMainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={primaryColor} />;
        },
        tabBarActiveTintColor: 'gray',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Perfil' }} />
    </Tab.Navigator>
  );
}
