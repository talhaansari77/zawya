import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import SignupScreen from '../../screens/Auth/Signup/SignupScreen';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';

const AuthStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={"SignupScreen"}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />

      <Stack.Screen name="SignOutScreen" component={SignOutScreen} />
  


    </Stack.Navigator>
  );
};

export default AuthStack;
