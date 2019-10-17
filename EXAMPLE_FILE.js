import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, ScrollView} from 'react-native';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      users: [],
    };
  }

  componentDidMount = async () => {
    this.setState({isLoading: true});
    const users = await this.getMoviesFromApi();
    this.setState({users, isLoading: false});
  };

  getMoviesFromApi = () => {
    return fetch('http://5da6e32e127ab80014c1d97c.mockapi.io/api/users')
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const {users, isLoading} = this.state;
    console.log(users);
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={[styles.container, {backgroundColor: '#fff'}]}>
            {users.length > 0 ? (
              users.map(item => {
                return (
                  <View style={styles.row}>
                    <Text key={item.id}>{item.name}</Text>
                    <Image style={styles.avatar} source={{uri: item.avatar}} />
                  </View>
                );
              })
            ) : !isLoading ? (
              <Text>{'No users'}</Text>
            ) : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20,
  },
  row: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 20,
    backgroundColor: 'gray',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
