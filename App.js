import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Navigation from './Navigation';
// import {Provider} from 'react-redux';
// import store from './store';

export default class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
      <Navigation />
      // <Text> Movies Here</Text>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});