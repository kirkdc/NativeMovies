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
import {movieByGenre, addFavourite} from '../Redux/actions';
import {connect} from 'react-redux';

class GenreScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.genre.name} Movies`,
    };
  };
  constructor(props) {
    super(props);
  }

  get data(){
    return this.props.topInGenre;
  }

  get favIds() {
    let favouritesList = this.props.favourites;
    let newArray = favouritesList.map(obj => {
      let nFavList = {};
      nFavList = obj.id;
      return nFavList;
    });

    return newArray;
  }

  render() {
    const data = this.data;
    const favIds = this.favIds;

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
                      favList={favIds}
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
    );
  }
}

const mapStateToProps = state => {
  return {
    topInGenre: state.topInGenre,
    favourites: state.addToFavourites,
  };
};

export default connect(
  mapStateToProps,
  {movieByGenre, addFavourite},
)(GenreScreen);

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
