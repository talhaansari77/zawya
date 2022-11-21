import {View, Text, LogBox} from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import CustomText from './src/components/CustomText';
import {Montserrat} from './src/utils/Fonts';
import RootNavigator from './src/routes';
import SendAmountScreen from './src/screens/Main/SendAmountScreen/SendAmountScreen';
import WalletScreen from './src/screens/Main/WalletScreen/WalletScreen';
import RecivedAmountScreen from './src/screens/Main/RecivedAmountScreen/RecivedAmountScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
