import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';

const MovieCardHorizon = props => {
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

    <View style={styles.movieCardHo}>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/original' + movie.backdrop_path,
        }}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.overlay}>
          <TouchableOpacity activeOpacity={0.6} onPress={onClickItem}>
            <Image
              key={movie.id}
              style={styles.imageStyle}
              resizeMode="contain"
              source={{
                // uri:'https://image.tmdb.org/t/p/w200' + movie.poster_path
                uri:
                  movie.poster_path == null
                    ? 'https://www.accessdisplays.co.uk/wp-content/uploads/2019/04/no-image.png'
                    : 'https://image.tmdb.org/t/p/w200' + movie.poster_path,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.movieName}>
            {movie.original_title || movie.name}
          </Text>
        </View>
      </ImageBackground>
    </View>

  );
};

export default MovieCardHorizon;

const styles = StyleSheet.create({
  movieName: {
    flex: 1,
    flexWrap: 'wrap',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    padding: 8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: "30%",
    marginLeft: "5%",

  },
  movieCardHo: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgb(38, 38, 38)',
    bottom: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 15,
    marginLeft: 15,
    borderColor: 'rgb(13, 13, 13)',
    borderWidth: 2,
    width: "100%",
    height: 300,
    justifyContent: 'flex-start',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  imageStyle: {
    width: 200,
    height: 300,
    borderColor: 'black',
    borderWidth: 1,
  },
  safeAreaView: {
    flex: 1,
  },
});
