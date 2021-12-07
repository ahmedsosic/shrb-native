import React from 'react';

import LoginScreen from './LoginScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const LoginStack = createNativeStackNavigator();

const LoginStackScreen = ({navigation}) => (
  <LoginStack.Navigator screenOptions={{
    headerShown: false
  }} >
          <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
  </LoginStack.Navigator>
  );

export default LoginStackScreen;