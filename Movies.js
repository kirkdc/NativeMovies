import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './containers/HomeScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class Movies extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isLoading: false,
  //     users: []
  //   };
  // }

  // componentDidMount = async () => {
  //   this.setState({isLoading: true});
  //   const users = await this.getMoviesFromApi();
  //   this.setState({users, isLoading: false});
  // };

  // getMoviesFromApi = () => {
  //   return fetch('http://5da6e32e127ab80014c1d97c.mockapi.io/api/users')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       return responseJson;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  //API Key for https://www.themoviedb.org/settings/api = 4c53c4a41e79851aed7a70a5c9e19e9a


  render() {
    return(
      <AppContainer/>

    )
  }
}

export default Movies;


const AppStackNavigatior = createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: HomeScreen,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.
    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({ navigation }) => ({
      title: `Movie App`,
    }),
  },

});



const AppContainer = createAppContainer(AppStackNavigatior);