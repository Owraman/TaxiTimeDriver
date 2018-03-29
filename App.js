/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
  navigationOptions
} from 'react-navigation';

import LoginComponent from './components/LoginComponent'
import MainComponent from './components/MainComponent'

  const AppStack = StackNavigator({
    LoginComponent: {
      screen: LoginComponent
    },
    MainComponent: {
      screen: MainComponent
    },
  }, {
    headerMode: 'none'
  }, {
    initialRouteName: 'LoginComponent',
  });
type Props = {};
export default class App extends Component<Props> {


  render() {
      return <AppStack/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
