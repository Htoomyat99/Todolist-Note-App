import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';

//component
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
