import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import HomeScreen from './containers/HomeScreen';
import MovieSearchScreen from './containers/MovieSearchScreen';
import AboutScreen from './containers/AboutScreen';
import MovieDetailsScreen from './containers/MovieDetails';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TopRatedScreen from './containers/TopRated';

class Navigation extends Component {
  //API Key for https://www.themoviedb.org/settings/api = 4c53c4a41e79851aed7a70a5c9e19e9a

  render() {
    return <AppContainer />;
  }
}

export default Navigation;


const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Search: {
    screen: MovieSearchScreen,
  },
  About: {
    screen: AboutScreen,
  },
});

const AppStackNavigation = createStackNavigator(
  {
    'Main': {screen: Tabs},
    'MoviesDetail': { screen: MovieDetailsScreen },
    'TopRated': {screen: TopRatedScreen},
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none'
  },
);


const AppContainer = createAppContainer(AppStackNavigation);
