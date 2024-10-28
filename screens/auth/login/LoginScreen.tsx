import { primaryColor } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { s } from './LoginStyle';

export default function LoginScreen() {
  const [username, setUsername] = useState('kevinhard');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={s.container}>
      <Image source={require('@/assets/images/logo.png')} style={s.logo} />
      <Text style={s.title}>Bienvenido a Streetwear</Text>
      <Text style={s.subtitle}>
        Marketplace de streetwear en donde puedes encontrar marcas nacionales e internacionales
      </Text>

      <View style={s.inputContainer}>
        <Text style={s.label}>Username</Text>
        <TextInput style={s.input} value={username} onChangeText={setUsername} />
      </View>

      <View style={s.inputContainer}>
        <Text style={s.label}>Password</Text>
        <View style={s.passwordContainer}>
          <TextInput
            style={s.passwordInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={s.eyeTouchable}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color={primaryColor} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={s.loginButton}>
        <Text style={s.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={s.forgotPasswordContainer}>
        <Text style={s.forgotPasswordText}>¿Olvidaste la contraseña?</Text>
        <TouchableOpacity>
          <Text style={s.resetText}>Resetear</Text>
        </TouchableOpacity>
      </View>

      <Text style={s.noAccountText}>¿No tienes cuenta?</Text>
      <TouchableOpacity style={s.registerButton}>
        <Text style={s.registerButtonText}>Registrate gratis</Text>
      </TouchableOpacity>
    </View>
  );
}