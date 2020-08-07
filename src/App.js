/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
// Splashscreen
import SplashScreen from 'react-native-splash-screen';

// Use Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Imports: Redux Persist Persister
import { store, persistor } from './redux/store'; // Import redux store

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

export default class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
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
