import { primaryColor } from '@/constants/Colors';
import { loginUser, userLoginError, userLoginLoading } from '@/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/hooksRedux';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { s } from './LoginStyle';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const userLoginLoadingState = useAppSelector(userLoginLoading);
  const userLoginErrorState = useAppSelector(userLoginError);

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
        {!usernameValid && (
          <Text style={s.validateInput}>Username no puede tener menos de 3 caracteres</Text>
        )}
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
        {!passwordValid && (
          <Text style={s.validateInput}>Password no puede tener menos de 3 caracteres</Text>
        )}
      </View>
      {passwordValid && usernameValid && userLoginErrorState && (
        <Text style={{ color: 'red' }}>{userLoginErrorState} </Text>
      )}
      <TouchableOpacity
        style={s.loginButton}
        onPress={() => {
          setPasswordValid(password.length > 2);
          setUsernameValid(username.length > 2);
          if (password.length > 2 && username.length > 2) {
            const data = {
              username,
              password
            };
            dispatch(loginUser(data));
          }
        }}
        disabled={userLoginLoadingState}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={s.loginButtonText}>Login</Text>
          {userLoginLoadingState && <ActivityIndicator size="small" color="#fff" />}
        </View>
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
