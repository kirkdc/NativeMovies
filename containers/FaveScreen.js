import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import MovieCardHorizon from '../components/MovieCardHorizon';
import {saveMovies, fetchMovies} from '../Redux/actions';
import {connect} from 'react-redux';
import {AsyncStorage} from 'react-native';

class FaveScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps) {
    if (this.props.state !== prevProps.state) {
      this.props.saveMovies();
      this.props.saveMovies();
    }
   }

  get data() {
    return this.props.favourites;
  }

  _storeData = async (data) => {
    try {
      await AsyncStorage.setItem('data', data);
    } catch (error) {
     console.log(error.message)
    }
  };


  render() {
    const data = this.props.fetchMovies;
    return (
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
                No Favourites Picked.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    saveMovies: state.saveMovies,
    fetchMovies: state.fetchMovies,
  };
};

export default connect(
  mapStateToProps,
  {addFavourite},
)(FaveScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 30)',
  },
  movieName: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(13, 13, 13)',
    // marginTop: 30,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    alignItems: 'flex-start',
    marginLeft: "4%",
  },
  movieContainer: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaView: {
    flex: 1,
  },
  errorText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

