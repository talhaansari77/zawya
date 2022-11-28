import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import SignupScreen from '../../screens/Auth/Signup/SignupScreen';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';
import Search from '../../screens/Main/Search';
import StoreScreen from '../../screens/Main/Store/StoreScreen';
import AddDesignScreen from '../../screens/Main/AddDesign/AddDesignScreen';

const SearchStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'SignupScreen'}>
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen name="StoreScreen" component={StoreScreen} />
      {/* <Stack.Screen name="AddDesignScreen" component={AddDesignScreen} /> */}
    </Stack.Navigator>
  );
};

export default SearchStack;
