import { primaryColor } from '@/constants/Colors';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export type Props = { error?: Error; resetError?: () => void };

const ErrorFallbackComponent = (props: Props) => (
  <SafeAreaView style={s.container}>
    <View style={s.content}>
      <Text style={s.title}>Oops!</Text>
      <Text style={s.subtitle}>Ha ocurrido un error</Text>
      <TouchableOpacity style={s.button} onPress={props.resetError}>
        <Text style={s.buttonText}>Vuelve a intentar</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export const s = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: 20
  },
  title: {
    fontSize: 40
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 30,
    backgroundColor: primaryColor,
    height: 50,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16
  }
});
export default ErrorFallbackComponent;
