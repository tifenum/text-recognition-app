import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';
import * as routes from '../navigation/routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  typeof routes.LOGIN_SCREEN
>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.49:3000/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;

        // Save token to AsyncStorage
        await AsyncStorage.setItem('token', token);
        navigation.navigate(routes.HOME_SCREEN); // Navigate to SelectImageScreen on success
      } else {
        Alert.alert('Invalid credentials. Please try again.');
      }
    } catch (error :any) {
      console.error('Error logging in:', error.message);
      Alert.alert('Login failed. Please try again.');
    }
  };

  const navigateToSignup = () => {
    navigation.navigate(routes.SIGNUP_SCREEN); // Navigate to SignupScreen
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={navigateToSignup} />
    </View>
  );
};

export default LoginScreen;
