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
import {saveMovies, getMovies, addFavourite} from '../Redux/actions';
import {connect} from 'react-redux';

class FaveScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.state !== prevProps.state) {
      this.props.getMovies();
    }
   }

   componentDidMount() {
    this.props.getMovies(); 
   }

   get data() {
    return this.props.favourites;
  }

  render() {
    const data = this.props.favourites;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.movieContainer}>
          { data && Array.isArray(data) && data.length > 0 ? (
            data.map(movie => {
              return (
                <MovieCardHorizon
                  key={movie.id}
                  navigation={this.props.navigation}
                  movie={movie}
                  source={"FAV_SCREEN"}
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
    getMovies: state.getMovies,
    favourites: state.addToFavourites
  };
};

export default connect(
  mapStateToProps,
  {addFavourite, getMovies, saveMovies },
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

