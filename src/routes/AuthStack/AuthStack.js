import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../../screens/Auth/OnBoarding/OnBoarding';
import Welcome from '../../screens/Auth/Welcome/Welcome';
import SecurityWallet from '../../screens/Auth/SecurityWallet/SecurityWallet';
import FingerPrintScreen from '../../screens/Main/FingerPrintScreen/FingerPrintScreen';

const AuthStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={"SecurityWallet"}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
   <Stack.Screen name="SecurityWallet" component={SecurityWallet} />
   <Stack.Screen name="FingerPrintScreen" component={FingerPrintScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />


    </Stack.Navigator>
  );
};

export default AuthStack;
