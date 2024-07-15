import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';
import * as routes from '../navigation/routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

type VirrementScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  typeof routes.VIRREMENT_SCREEN
>;

const VirrementScreen = () => {
    const navigation = useNavigation<VirrementScreenNavigationProps>();
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>Welcome to Your App!</Text>
      <Text style={styles.messageText}>This is a simple message screen.</Text>
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
});

export default VirrementScreen;
