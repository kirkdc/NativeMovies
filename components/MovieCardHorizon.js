import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Button,
} from 'react-native';
import {MOVIE_CARD_IMG} from '../config';
import {movieByGenre, addFavourite} from '../Redux/actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

class MovieCardHorizon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genreType: '',
    };
  }

  onClickItem = () => {
    let movie = this.props.movie;
    this.props.navigation.navigate('MoviesDetail', {
      movieId: movie.id,
      movieTitle: movie.original_title,
      movieDesc: movie.overview,
      movieBack: movie.backdrop_path,
    });
  };

  onClickTab = tag => {
    this.props.navigation.navigate('TopGenre', {
      genre: tag,
    });
    this.props.movieByGenre(tag.id);
  };

  onClickFavourites = movie => {
    this.props.addFavourite(movie);
  };

  getFilteredGenres = genreIds => {
    let filteredGenres = [];
    genreIds.forEach(id => {
      genres.forEach(genre => {
        if (genre.id === id) {
          filteredGenres.push(genre);
        }
      });
    });
    return filteredGenres;
  };

  getTagName = id => {
    return genres.filter(genre => genre.id === id);
  };

  render() {
    let movie = this.props.movie;
    return (
      <View style={styles.movieCardHo} key={movie.id}>
        <ImageBackground
          source={{
            uri: 'https://image.tmdb.org/t/p/original' + movie.backdrop_path,
          }}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.overlay}>
            <TouchableOpacity activeOpacity={0.6} onPress={this.onClickItem}>
              <Image
                style={styles.imageStyle}
                resizeMode="contain"
                source={{
                  // uri:'https://image.tmdb.org/t/p/w200' + movie.poster_path
                  uri:
                    movie.poster_path == null
                      ? 'https://www.accessdisplays.co.uk/wp-content/uploads/2019/04/no-image.png'
                      : `https://image.tmdb.org/t/p/w${MOVIE_CARD_IMG.width}${movie.poster_path}`,
                }}
              />
            </TouchableOpacity>

            <View style={styles.detailContainer}>
              <Text style={styles.movieName}>
                {movie.original_title || movie.name}
              </Text>
              <View style={styles.tagContainer}>
                {movie.genre_ids.length > 0 ? (
                  this.getFilteredGenres(movie.genre_ids).map(tag => {
                    return (
                      <TouchableOpacity
                        key={tag.id}
                        style={styles.tag}
                        onPress={() => this.onClickTab(tag)}>
                        <Text style={styles.tagText}> {tag.name} </Text>
                      </TouchableOpacity>
                    );
                  })
                ) : (
                  <Text> No Tags</Text>
                )}
              </View>
              <View style={styles.favContainer}>
                <Icon.Button name="heart" size={20} color="red" backgroundColor="pink" onPress={() => this.onClickFavourites(movie)}>
                  <Text style={{fontFamily: 'Arial', fontSize: 15}}>
                    Add to Favourites
                  </Text>
                </Icon.Button>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    topInGenreProp: state.topInGenre,
    favourites: state.addToFavourites
  };
};

export default connect(
  mapStateToProps,
  {movieByGenre, addFavourite},
)(MovieCardHorizon);

const styles = StyleSheet.create({
  movieName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 4,
    margin: 3,
  },
  movieCardHo: {
    flex: 1,
    backgroundColor: 'rgb(38, 38, 38)',
    borderColor: 'rgb(13, 13, 13)',
    borderWidth: 2,
    marginTop: 10,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  imageStyle: {
    width: MOVIE_CARD_IMG.width,
    height: MOVIE_CARD_IMG.height,
    borderColor: 'black',
    borderWidth: 1,
  },
  tag: {
    borderRadius: 30,
    backgroundColor: 'brown',
    flexDirection: 'row',
    padding: 4,
    margin: 3,
    alignSelf: 'flex-start',
  },
  tagText: {
    color: 'white',
    alignSelf: 'center',
  },
  detailContainer: {
    flex: 1,
    padding: 4,
    flexDirection: 'column',
  },
  safeAreaView: {
    flex: 1,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  favContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});
