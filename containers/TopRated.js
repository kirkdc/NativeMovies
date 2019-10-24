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
// import MovieCard from '../components/MovieCard';
import MovieCardHorizon from '../components/MovieCardHorizon';

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
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{this.headerText}</Text>
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
});
