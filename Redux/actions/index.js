import axios from 'axios';
import { writeAndReadFromLdb, readFromLdb, removeFromLdb } from '../../utils';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

export const fetchMovies = () => async dispatch => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/week?api_key=4c53c4a41e79851aed7a70a5c9e19e9a',
  );
  dispatch({type: 'FETCH_MOVIES', payload: response.data.results});
};

export const searchMovies = term => async dispatch => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a',
    {
      params: {query: term},
    },
  );
  dispatch({type: 'SEARCH_MOVIES', payload: response.data.results});
};

export const showingNow = () => async dispatch => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a&primary_release_date.gte=' +
      today +
      '&primary_release_date.lte=' +
      today,
  );
  dispatch({type: 'SHOWING_NOW', payload: response.data.results});
};

export const movieByGenre = genreType => async dispatch => {
  dispatch({type: 'MOVIE_GENRE_REQ'});
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' +
      genreType,
  );

  dispatch({type: 'MOVIE_GENRE_SUCCESS', payload: response.data.results});
};

export const addFavourite = movie => async dispatch => {
  console.log('Initial - start');
  const favMoviesInsideAS = await writeAndReadFromLdb('favourite_movies', movie);
  dispatch({type: 'ADD_TO_FAVS', payload: JSON.parse(favMoviesInsideAS)});
};

export const removeFavourite = movie => async dispatch => {
  const deletedMovies = await removeFromLdb('favourite_movies', movie);
  dispatch({type:'REMOVE_FAV', payload: deletedMovies})
}

// export const rejectMovie = movie => async dispatch => {
//   console.log('Initial - start');
//   const rejectedMoviesInsideAS = await writeAndReadFromLdb('reject_movies', movie);
//   dispatch({type: 'REJECT_MOVIES', payload: JSON.parse(rejectedMoviesInsideAS)});
// };

export const saveMovies = save => async dispatch => {
  //  await AsyncStorage.setItem('favourite_movies', "Coolest Movie Evar! REPLACE ME");
  dispatch({type: 'SAVE_MOVIES', payload: save});
};

export const getMovies = fetch => async dispatch => {
  const favouriteMovies = await readFromLdb('favourite_movies');
  dispatch({type: 'GET_MOVIES', payload: favouriteMovies });
};
