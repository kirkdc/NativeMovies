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
import MovieCard from '../components/MovieCard';

class MovieSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {userInput: '',
  data:[]};
  }

  // componentDidMount = () => {
  //   console.log(this.props);
  //   this.props.searchMovies(this.state.userInput);
  // };
  //^Remove this ^

  handleSubmit = () => {
  this.props.searchMovies(this.state.userInput);
  }


  render() {
    console.log(this.props.userSearchResults)
    const data = this.props.userSearchResults;
    return (
      <SafeAreaView style={styles.safeAreaView}>

          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              Search for your favourite movies
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={{height: 40}}
              placeholder="Search For Your Favourite Movies"
              onChangeText={userInput => this.setState({userInput})}
              value={this.state.userInput}
            />
            <Button title={"Search"} onPress={this.handleSubmit}  />
          </View>
          <ScrollView style={styles.container}>
          <View style={styles.movieContainer}>
            {data.length > 0 ? (
              data.map(movie => {
                return (
                  <MovieCard
                  key={movie.id}
                  navigation={this.props.navigation}
                  movie={movie}
                />
                );
              })
            ) : (
              <Text> Network Error </Text>
            )}
          </View>
          </ScrollView>

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
  safeAreaView: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'brown',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  movieContainer: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
