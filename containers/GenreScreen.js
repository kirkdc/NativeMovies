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
import {movieByGenre} from '../Redux/actions';
import {connect} from 'react-redux';

class GenreScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
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

  render() {
    const data = this.data;
    console.log(data, 'THIS IS THE DATA FROM GenreScreen');
    return (
      // <SafeAreaView style={styles.safeAreaView}>
      //   <View style={styles.mainContainer}>
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
      //   </View>
      // </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    topInGenre: state.topInGenre,
  };
};

export default connect(
  mapStateToProps,
  {movieByGenre},
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
