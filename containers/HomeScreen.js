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
import {fetchMovies} from '../Redux/actions';
import {connect} from 'react-redux';

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

  componentDidMount = () => {
    console.log(this.props);
    this.props.fetchMovies();
  };

  onClickMovie = movie => {
    console.log(movie, 'from HomeScreen');
    // this.props.navigation.navigate('MoviesDetail', { movieId: movie.id });
    this.props.navigation.navigate('MoviesDetail', {
      movieId: movie.id,
      movieTitle: movie.original_title,
      movieDesc: movie.overview,
      movieBack: movie.backdrop_path,
    });
  };

  render() {
    const {isLoading} = this.state;
    const data = this.props.trendingMovies;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}> Top Rated Movies this Week </Text>
          </View>

          <View style={styles.movieContainer}>
            {data.length > 0 ? (
              data.map(movie => {
                return (
                  <View key={movie.id} style={styles.movieCard}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() => this.onClickMovie(movie)}>
                      <Image key={movie.id}
                        style={styles.imageStyle}
                        resizeMode="contain"
                        source={{
                          uri:
                            'https://image.tmdb.org/t/p/w200' +
                            movie.poster_path,
                        }}
                      />
                    </TouchableOpacity>
                    <Text key={movie.id} style={styles.movieName}>{movie.original_title}</Text>
                  </View>
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
    trendingMovies: state.trendingMovies,
  };
};

export default connect(
  mapStateToProps,
  {fetchMovies},
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  movieCard: {
    backgroundColor: 'grey',
    width: '80%',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 300,
    borderColor: 'black',
    borderWidth: 2,
  },
  safeAreaView: {
    flex: 1,
  },
});
