import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';

const AuthStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={"SecurityWallet"}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignOutScreen" component={SignOutScreen} />
  


    </Stack.Navigator>
  );
};

export default AuthStack;
