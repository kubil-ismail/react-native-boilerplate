/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

// Use Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Imports: Redux Persist Persister
import { store, persistor } from './redux/store'; // Import redux store

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
