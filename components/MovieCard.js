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
      <Text style={styles.movieName}>{movie.original_title || movie.name }</Text>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  movieName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieCard: {
    backgroundColor: 'rgb(38, 38, 38)',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 15,
    borderColor: "rgb(13, 13, 13)",
    borderWidth: 2,
    width: 250,
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
