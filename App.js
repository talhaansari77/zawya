import {View, Text, LogBox} from 'react-native';
import React from 'react';
import RootNavigator from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
LogBox.ignoreAllLogs();

const App = () => {

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
