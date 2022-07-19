import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//component
import WelcomeScreen from '../components/Welcome/Welcome';
import TagScreen from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="TabNavigator" component={TagScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
