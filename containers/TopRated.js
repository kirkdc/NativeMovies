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
import MovieCard from '../components/MovieCard';

const apiKey = '4c53c4a41e79851aed7a70a5c9e19e9a';
const TrendingUriWeek =
  'https://api.themoviedb.org/3/trending/all/week?api_key=';
const TrendingUriDay = 'https://api.themoviedb.org/3/trending/all/day?api_key=';

const posterUri = 'https://image.tmdb.org/t/p/w200';

class TopRatedScreen extends Component {
  constructor(props) {
    super(props);
    this.navProps = this.props.navigation.state.params;

    this.state = {
      isLoading: false,
      data: [],
    };
  }

  get data() {
    return this.navProps.type === 'TOP_RATED' ? this.props.trendingMovies : this.props.showingMovies;
  }

  get headerText() {
    return this.navProps.type === 'TOP_RATED' ? 'Top Rated Movies this Week' : 'Now showing Movies';
  }

  render() {
    const {isLoading} = this.state;
    const data = this.data;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{this.headerText}</Text>
          </View>

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
    trendingMovies: state.trendingMovies,
    showingMovies: state.showingMovies,
  };
};

export default connect(
  mapStateToProps,
  {fetchMovies},
)(TopRatedScreen);

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
