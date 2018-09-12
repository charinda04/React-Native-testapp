/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { createStore } from 'redux'
import { Provider } from "react-redux";

import store from './store/ConfigureStore';
import HomeNavigation from './navigation/home/index';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});




type Props = {};


const App = () => (
  <Provider store={store}>
      <HomeNavigation />
  </Provider>
  // <View>
  // <Text>hello</Text>
  // </View>
);

export default App;

