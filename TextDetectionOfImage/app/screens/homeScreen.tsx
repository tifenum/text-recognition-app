import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';
import * as routes from '../navigation/routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  typeof routes.HOME_SCREEN
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const handleButton1Press = () => {
    // Function for Button 1
    navigation.navigate(routes.TRANSACTION_SCREEN); // Navigate to login screen after successful account creation

    // Add your custom logic here
  };

  const handleButton2Press = () => {
    // Function for Button 2
    navigation.navigate(routes.CREATE_ACCOUNT_SCREEN); // Navigate to login screen after successful account creation
    // Add your custom logic here
  };

  const handleButton3Press = async () => {
    navigation.navigate(routes.SELECT_SCREEN); // Navigate to login screen after successful account creation
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Button 1" onPress={handleButton1Press} />
        <Button title="Button 2" onPress={handleButton2Press} />
        <Button title="Button 3" onPress={handleButton3Press} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust background color as needed
  },
  messageText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});

export default HomeScreen;
