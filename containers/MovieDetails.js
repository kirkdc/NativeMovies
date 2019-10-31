import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {fetchMovies} from '../Redux/actions';
import {connect} from 'react-redux';

class MovieDetailsScreen extends Component {
  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ImageBackground
          source={{
            uri:
              'https://image.tmdb.org/t/p/original' +
              this.props.navigation.state.params.movieBack,
          }}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.overlay}>
            <View style={styles.container}>
              <Text style={styles.header}>
                {this.props.navigation.state.params.movieTitle}
              </Text>
              <Text style={styles.description}>
                {this.props.navigation.state.params.movieDesc}
              </Text>
              <View style={styles.buttonContainer}>
                <Button onPress={() => this.goBack()} title={'go back'} />
              </View>
            </View>
          </View>
        </ImageBackground>
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
)(MovieDetailsScreen);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 10,
  },
  description: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  buttonContainer: {
    padding: "5%",
  }

});
