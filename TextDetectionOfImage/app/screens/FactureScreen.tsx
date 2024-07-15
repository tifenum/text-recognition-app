import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';
import * as routes from '../navigation/routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

type FactureScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  typeof routes.FACTURE_SCREEN
>;

const FactureScreen = () => {
  const navigation = useNavigation<FactureScreenNavigationProps>();

  const handlePayPress = () => {
    // Function for "Virement" button
    navigation.navigate(routes.PAY_SCREEN); // Navigate to login screen after successful account creation  
    // Implement your logic here
  };

  const handleScanPress = () => {
    // Function for "Versement" button
    navigation.navigate(routes.SELECT_SCREEN); // Navigate to login screen after successful account creation  
    // Implement your logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Scan & Upload ur facture" onPress={handleScanPress} />
        <Button title="Pay ur facture" onPress={handlePayPress} />
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

export default FactureScreen;
