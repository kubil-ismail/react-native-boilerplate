/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }
}
