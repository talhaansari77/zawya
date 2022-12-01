import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthStack from './AuthStack/AuthStack';
import MainStack from './MainStack/MainStack';
import {StatusBar} from 'react-native';
import MainDrawer from './MainDrawer/MainDrawer';

const RootNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
        <Stack.Screen name="MainStack" component={MainDrawer} />
        {/* <Stack.Screen name="MainStack" component={MainStack} /> */}
      </Stack.Navigator>
      <StatusBar barStyle={'dark-content'} />
    </NavigationContainer>
  );
};

export default RootNavigator;
