import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthStack from './AuthStack/AuthStack';
import MainStack from './MainStack/MainStack';
import {StatusBar} from 'react-native';

const RootNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="MainStack" component={MainStack} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
      <StatusBar barStyle={'light-content'} />
    </NavigationContainer>
  );
};

export default RootNavigator;
