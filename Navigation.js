import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { eventEmitter, eventTypes } from './Events';
import HomeScreen from './containers/HomeScreen';
import MovieSearchScreen from './containers/MovieSearchScreen';
import FaveScreen from './containers/FaveScreen';
import MovieDetailsScreen from './containers/MovieDetails';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import TopRatedScreen from './containers/TopRated';
import GenreScreen from './containers/GenreScreen';

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
    Favourites: {
      screen: FaveScreen,
      navigationOptions: {
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          eventEmitter.emit(eventTypes.FETCH_FAVS);
          defaultHandler();
        },
      },
    },
  },
  {
    lazy: true,
    navigationOptions: {
      title: 'The Movie DataBase',
      headerStyle: {
        backgroundColor: 'rgb(45,45,45)',
      },
      headerTitleContainerStyle:{
        marginLeft: 15,
      },
      headerLeft:(
        <Image
        style={{width: 45, height: 45, marginLeft: 20, paddingRight: 20}}
        source={{uri: 'https://www.themoviedb.org/assets/2/v4/logos/208x226-stacked-green-9484383bd9853615c113f020def5cbe27f6d08a84ff834f41371f223ebad4a3c.png'}}
      />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
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
    TopGenre: {screen: GenreScreen}
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: "Back to Home",
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'green',
        color: '#fff'
      },
    },
  },
);

const AppContainer = createAppContainer(AppStackNavigation);
