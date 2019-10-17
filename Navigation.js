import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import HomeScreen from './containers/HomeScreen';
import MovieSearchScreen from './containers/MovieSearchScreen';
import AboutScreen from './containers/AboutScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';



class Navigation extends Component {
  //API Key for https://www.themoviedb.org/settings/api = 4c53c4a41e79851aed7a70a5c9e19e9a

  render() {
    return (
    <AppContainer />
    );
  }
}

export default Navigation;

const AppStackNavigatior = createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: `Movie App`,
    }),
  },
});

const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Search: {
    screen: MovieSearchScreen,
  },
  About: {
    screen: AboutScreen
  }
});

const AppContainer = createAppContainer(Tabs);
