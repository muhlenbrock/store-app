import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface HeaderCardProps {
  onPressGoBack?: () => void;
}

const Header: React.FC<HeaderCardProps> = ({ onPressGoBack }) => {
  return (
    <View style={s.header}>
      <TouchableOpacity onPress={onPressGoBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="ellipsis-vertical" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const s = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    zIndex: 100
  }
});
