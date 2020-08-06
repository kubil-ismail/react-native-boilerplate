/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

// Import screens / Tab
// import { Home } from './app';
import HomeTab from './tab/HomeTab';

// Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class index extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          component={HomeTab}
          name={'index'}
        />
      </Stack.Navigator>
    );
  }
}
