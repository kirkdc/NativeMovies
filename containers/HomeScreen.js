import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const apiKey = '4c53c4a41e79851aed7a70a5c9e19e9a';
const TrendingUriWeek =
  'https://api.themoviedb.org/3/trending/all/week?api_key=';
const TrendingUriDay = 'https://api.themoviedb.org/3/trending/all/day?api_key=';

const posterUri = 'https://image.tmdb.org/t/p/w200';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: [],
    };
  }

  componentDidMount = async () => {
    this.setState({isLoading: true});
    const rawData = await this.getMoviesFromApi();
    const data = rawData.results;
    this.setState({data, isLoading: false});
  };

  getMoviesFromApi = () => {
    return fetch(
      'https://api.themoviedb.org/3/trending/all/week?api_key=4c53c4a41e79851aed7a70a5c9e19e9a',
    )
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const {data, isLoading} = this.state;
    console.log(data);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> Top Rated Movies this Week </Text>
        </View>

        <View style={styles.movieContainer}>
          {data.length > 0 ? (
            data.map(movie => {
              return (
                <View style={styles.movieCard}>
                  <TouchableOpacity
                  activeOpacity={0.6}
                    onPress={()=>{alert("Details about image")}}>
                    <Image
                      style={styles.imageStyle}
                      resizeMode="center"
                      source={{
                        uri:
                          'https://image.tmdb.org/t/p/w500' + movie.poster_path,
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={styles.movieName} key={movie.id}>
                    {' '}
                    {movie.title || movie.name}{' '}
                  </Text>
                </View>
              );
            })
          ) : (
            <Text> Network Error </Text>
          )}
        </View>
      </ScrollView>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  movieName: {
    color: 'red',
    fontSize: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    backgroundColor: 'brown',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  movieContainer: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieCard: {
    backgroundColor: '#fff',
    width: '80%',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 300,
    height: 300,
    resizeMode: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },

});
