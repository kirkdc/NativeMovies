import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, ScrollView} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View>
      <Text> Home Screen </Text>
      <Text> Top List goes here </Text>
        {/* <Button/> */}
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  }
});
