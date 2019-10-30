import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, ScrollView} from 'react-native';

class FaveScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> All user favourites here </Text>
      </View>
    );
  }
}
export default FaveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
