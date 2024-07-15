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

export type RootStackParamList = {
  [routes.SELECT_SCREEN]: undefined;
  [routes.PROCESS_IMAGE_SCREEN]: {
    uri: string;
  };
  [routes.LOGIN_SCREEN]: undefined;
  [routes.SIGNUP_SCREEN]: undefined;
  [routes.CREATE_ACCOUNT_SCREEN]: undefined;
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
      <Stack.Screen
        name={routes.PROCESS_IMAGE_SCREEN}
        component={ProcessImageScreen}
      />
    </Stack.Navigator>
  );
};




