import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Navigation from './Navigation';
import { Provider } from 'react-redux'
import reducers from './Redux/reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


const store = createStore(reducers, applyMiddleware(thunk));
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Navigation />
      </Provider>
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
