import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, ScrollView} from 'react-native';

class MovieDetailsScreen extends Component {

  goBack =() => {
    this.props.navigation.goBack();
  }

  render() {
    console.log(this.props.navigation, "nav")
    return (
      <View style={styles.container}>
        <Button onPress={() => this.goBack()} title={'go back'}/>
        <Text>{'Movie Details'}</Text>
      </View>
    );
  }
}
export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
