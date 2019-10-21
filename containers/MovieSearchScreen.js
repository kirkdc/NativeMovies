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

class MovieSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {userInput: ''};
  }

  componentDidMount = () => {
    console.log(this.props);
    this.props.searchMovies();
  };


  render() {
    const data = this.props.searchedMovies
    console.log(this.state.userInput)
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.container}>
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
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchMovies: state.searchMovies,
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

});
