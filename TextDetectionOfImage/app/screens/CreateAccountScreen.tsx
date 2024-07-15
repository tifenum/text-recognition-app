import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';
import * as routes from '../navigation/routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

type CreateAccountScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  typeof routes.CREATE_ACCOUNT_SCREEN
>;

const CreateAccountScreen = () => {
  const navigation = useNavigation<CreateAccountScreenNavigationProps>();
  const [accountName, setAccountName] = useState('');
  const [initialBalance, setInitialBalance] = useState('');

  const handleCreateAccount = async () => {
    try {
      const token = await AsyncStorage.getItem('token'); // Retrieve token from AsyncStorage
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await axios.post(
        'http://192.168.1.49:3000/auth/addaccount',
        {
          accountName,
          initialBalance,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data;
      navigation.navigate(routes.HOME_SCREEN); // Navigate to login screen after successful account creation
    } catch (error : any) {
      console.error('Error creating account:', error.message);
      Alert.alert('Account Creation Failed', 'Please check your credentials and try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Account Name"
        value={accountName}
        onChangeText={setAccountName}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Initial Balance"
        value={initialBalance}
        onChangeText={setInitialBalance}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <Button title="Create Account" onPress={handleCreateAccount} />
    </View>
  );
};

export default CreateAccountScreen;
