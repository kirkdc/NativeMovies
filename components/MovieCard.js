import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';

const MovieCard = props => {
  const {movie, navigation} = props;

  let onClickItem = () => {
    console.log(movie, 'from HomeScreen');
   navigation.navigate('MoviesDetail', {
      movieId: movie.id,
      movieTitle: movie.original_title,
      movieDesc: movie.overview,
      movieBack: movie.backdrop_path,
    });
  };

  return (
    <View style={styles.movieCard}>
      <TouchableOpacity activeOpacity={0.6} onPress={onClickItem}>
        <Image
          key={movie.id}
          style={styles.imageStyle}
          resizeMode="contain"
          source={{
            uri: 'https://image.tmdb.org/t/p/w200' + movie.poster_path,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.movieName}>{movie.original_title}</Text>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  movieName: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieCard: {
    backgroundColor: 'grey',
    width: '80%',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 300,
    borderColor: 'black',
    borderWidth: 2,
  },
  safeAreaView: {
    flex: 1,
  },
});
