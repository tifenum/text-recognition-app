import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';
import * as routes from '../navigation/routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

type TransactionScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  typeof routes.TRANSACTION_SCREEN
>;

const TransactionScreen = () => {
  const navigation = useNavigation<TransactionScreenNavigationProps>();

  const handleRetraitPress = () => {
    // Function for "Retrait" button
    // Implement your logic here
    navigation.navigate(routes.RETRAIT_SCREEN); // Navigate to login screen after successful account creation
  };

  const handleVirementPress = () => {
    // Function for "Virement" button
    navigation.navigate(routes.VIRREMENT_SCREEN); // Navigate to login screen after successful account creation  
    // Implement your logic here
  };

  const handleVersementPress = () => {
    // Function for "Versement" button
    navigation.navigate(routes.VERSEMENT_SCREEN); // Navigate to login screen after successful account creation
    // Implement your logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Retrait" onPress={handleRetraitPress} />
        <Button title="Virement" onPress={handleVirementPress} />
        <Button title="Versement" onPress={handleVersementPress} />
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

export default TransactionScreen;
