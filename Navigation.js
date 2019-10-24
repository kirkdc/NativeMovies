import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import HomeScreen from './containers/HomeScreen';
import MovieSearchScreen from './containers/MovieSearchScreen';
import AboutScreen from './containers/AboutScreen';
import MovieDetailsScreen from './containers/MovieDetails';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import TopRatedScreen from './containers/TopRated';

class Navigation extends Component {
  //API Key for https://www.themoviedb.org/settings/api = 4c53c4a41e79851aed7a70a5c9e19e9a

  render() {
    return <AppContainer />;
  }
}

export default Navigation;

const Tabs = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Search: {
      screen: MovieSearchScreen,
    },
    About: {
      screen: AboutScreen,
    },
  },
  {
    navigationOptions: {
      title: 'The Movie DataBase',
      headerStyle: {
        backgroundColor: 'rgb(55,55,55)',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    tabBarOptions: {
      labelStyle: {
        fontSize: 16,
        color: 'white',
        fontWeight: "bold"

      },
      tabStyle: {
        // width: 100,
      },
      style: {
        backgroundColor: 'rgb(38, 38, 38)',
      },
    }
  },
);

const AppStackNavigation = createStackNavigator(
  {
    Main: {
      screen: Tabs
    },
    MoviesDetail: {screen: MovieDetailsScreen},
    TopRated: {screen: TopRatedScreen},
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'black',
        color: '#fff'
      },
    },
    navigationOptions: (props) => {
      return {
        headerLabel: 'Home',
      }
    },
  },
);

const AppContainer = createAppContainer(AppStackNavigation);
