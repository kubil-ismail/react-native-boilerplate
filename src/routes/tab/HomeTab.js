/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { Home } from '../app';

const BottomTab = createBottomTabNavigator();

export default class HomeTab extends Component {
  render() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="address-book" color={color} size={size} />
            ),
          }}
          component={Home}
          name="home"
        />
      </BottomTab.Navigator>
    );
  }
}
