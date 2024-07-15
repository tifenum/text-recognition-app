import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import * as routes from './routes';
import {SelectImageScreen} from '../screens/SelectImageScreen';
import {ProcessImageScreen} from '../screens/ProcessImageScreen';
import {RouteProp} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import transactionSceen from '../screens/Transaction';
import HomeScreen from '../screens/homeScreen';
import RetraitScreen from '../screens/RetraitSreen';
import FactureScreen from '../screens/FactureScreen';
import PayScreen from '../screens/PaySeeen';

export type RootStackParamList = {
  [routes.SELECT_SCREEN]: undefined;
  [routes.PROCESS_IMAGE_SCREEN]: {
    uri: string;
  };
  [routes.LOGIN_SCREEN]: undefined;
  [routes.SIGNUP_SCREEN]: undefined;
  [routes.CREATE_ACCOUNT_SCREEN]: undefined;
  [routes.TRANSACTION_SCREEN]: undefined;
  [routes.HOME_SCREEN]: undefined;
  [routes.RETRAIT_SCREEN]: undefined;
  [routes.VERSEMENT_SCREEN]: undefined;
  [routes.VIRREMENT_SCREEN]: undefined;
  [routes.FACTURE_SCREEN]: undefined;
  [routes.PAY_SCREEN]: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

export type SelectScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  typeof routes.SELECT_SCREEN
>;

export type ProcessImageNavigationProps = StackNavigationProp<
  RootStackParamList,
  typeof routes.PROCESS_IMAGE_SCREEN
>;

export type ProcessImageRouteProps = RouteProp<
  RootStackParamList,
  typeof routes.PROCESS_IMAGE_SCREEN
>;

export const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.LOGIN_SCREEN}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: 'black',
      }}>
      <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={routes.SIGNUP_SCREEN} component={SignupScreen} />

      <Stack.Screen
        name={routes.SELECT_SCREEN}
        component={SelectImageScreen}
      />
      <Stack.Screen name={routes.CREATE_ACCOUNT_SCREEN} component={CreateAccountScreen}></Stack.Screen>
      <Stack.Screen name={routes.TRANSACTION_SCREEN} component={transactionSceen}></Stack.Screen>
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen}></Stack.Screen>
      <Stack.Screen name={routes.RETRAIT_SCREEN} component={RetraitScreen}></Stack.Screen>
      <Stack.Screen name={routes.VERSEMENT_SCREEN} component={RetraitScreen}></Stack.Screen>
      <Stack.Screen name={routes.VIRREMENT_SCREEN} component={RetraitScreen}></Stack.Screen>
      <Stack.Screen name={routes.FACTURE_SCREEN} component={FactureScreen}></Stack.Screen>
      <Stack.Screen name={routes.PAY_SCREEN} component={PayScreen}></Stack.Screen>
      <Stack.Screen
        name={routes.PROCESS_IMAGE_SCREEN}
        component={ProcessImageScreen}
      />
    </Stack.Navigator>
  );
};




