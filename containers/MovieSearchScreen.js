import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';

import {searchMovies} from '../Redux/actions';
import {connect} from 'react-redux';
// import MovieCard from '../components/MovieCard';
import MovieCardHorizon from '../components/MovieCardHorizon';
import {whileStatement} from '@babel/types';

class MovieSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {userInput: '', data: []};
  }

  handleSubmit = () => {
    this.props.searchMovies(this.state.userInput);
  };

  render() {
    console.log(this.props.userSearchResults, 'movieSearchScreen.js');
    const data = this.props.userSearchResults;

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.mainContainer}>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBox}
              placeholderTextColor="grey"
              placeholder="Find your favourite movies"
              onChangeText={userInput => this.setState({userInput})}
              value={this.state.userInput}
            />
            <Button title={'Search'} onPress={this.handleSubmit} />
          </View>
          <ScrollView style={styles.container}>
            <View style={styles.movieContainer}>
              {data.length > 0 ? (
                data.map(movie => {
                  return (
                    <MovieCardHorizon
                      key={movie.id}
                      navigation={this.props.navigation}
                      movie={movie}
                    />
                  );
                })
              ) : (
                <View>
                  <Text style={styles.errorText}>
                    Sorry, we cant seem to find that movie. Please try again.{' '}
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    userSearchResults: state.searchMovies,
  };
};

export default connect(
  mapStateToProps,
  {searchMovies},
)(MovieSearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputContainer: {
    padding: 8
  },
  inputBox: {
    height: 40,
    backgroundColor: 'rgb(38, 38, 38)',
    color: 'white',
    borderColor: 'yellow',
  },
  safeAreaView: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'rgb(13, 13, 13)',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    alignItems: 'flex-start',
    marginLeft: '4%',
    padding: 10,
  },
  movieContainer: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    marginTop: '30%',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 35,
  },
});
