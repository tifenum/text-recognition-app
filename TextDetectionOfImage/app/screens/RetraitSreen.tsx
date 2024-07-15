import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigator';
import * as routes from '../navigation/routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

type RetraitScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  typeof routes.RETRAIT_SCREEN
>;

const RetraitScreen = () => {
  const navigation = useNavigation<RetraitScreenNavigationProps>();

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
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});

export default RetraitScreen;
