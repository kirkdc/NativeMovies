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
import {fetchMovies, showingNow} from '../Redux/actions';
import {connect} from 'react-redux';
import MovieCard from '../components/MovieCard';
import {writeAndReadFromLdb} from '../utils';
import AsyncStorage from '@react-native-community/async-storage';

const apiKey = '4c53c4a41e79851aed7a70a5c9e19e9a';
const TrendingUriWeek =
  'https://api.themoviedb.org/3/trending/all/week?api_key=';
const TrendingUriDay = 'https://api.themoviedb.org/3/trending/all/day?api_key=';

const posterUri = 'https://image.tmdb.org/t/p/w200';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: [],
    };
  }

  onSeeMore = async type => {
    const userActions = await writeAndReadFromLdb(
      'user_actions',
      `${type}_SEEMORE_CLICKED`,
    );
    const {navigation} = this.props;
    navigation.navigate('SeeMore', {
      movieId: 'null',
      type,
    });
  };

  componentDidMount = () => {
    this.props.fetchMovies();
    this.props.showingNow();
    // AsyncStorage.clear();
  };

  render() {
    const {isLoading} = this.state;
    const data = this.props.trendingMovies;
    const nowPlaying = this.props.showingMovies;

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.mainContainer}>
          <ScrollView>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Top Rated Movies</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.onSeeMore('TOP_RATED')}>
                <Text style={styles.buttonText}> See More </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.movieContainer}>
              <ScrollView horizontal={true}>
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
              </ScrollView>
            </View>

            <View style={styles.headerContainer}>
              <Text style={styles.headerText}> New Releases </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.onSeeMore('NOW_PLAYING')}>
                <Text style={styles.buttonText}> See More </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.movieContainer}>
              <ScrollView horizontal={true}>
                {nowPlaying.length > 0 ? (
                  nowPlaying.map(movie => {
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
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    trendingMovies: state.trendingMovies,
    showingMovies: state.showingMovies,
  };
};

export default connect(
  mapStateToProps,
  {fetchMovies, showingNow},
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  movieName: {
    color: 'black',
    fontSize: 30,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(13, 13, 13)',
    marginTop: 30,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    alignItems: 'flex-start',
    marginLeft: '4%',
  },
  button: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 4,
    marginRight: '4%',
  },
  buttonText: {
    color: 'rgb(0, 153, 255)',
    fontSize: 20,
  },
  movieContainer: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(13, 13, 13)',
  },
  safeAreaView: {
    flex: 1,
  },
});
