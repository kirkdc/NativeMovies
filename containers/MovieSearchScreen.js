import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, ScrollView} from 'react-native';

class MovieSearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> SEARCH SCREEN </Text>
      </View>
    );
  }
}
export default MovieSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
