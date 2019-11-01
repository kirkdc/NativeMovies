import axios from 'axios';


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd

  export const fetchMovies = () => async (dispatch) => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/week?api_key=4c53c4a41e79851aed7a70a5c9e19e9a',
    );
    dispatch({type: 'FETCH_MOVIES', payload: response.data.results});
  };


  export const searchMovies = (term) => async (dispatch) => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a',{
        params: {query: term},
      }
    );
    dispatch({type: 'SEARCH_MOVIES', payload: response.data.results});
  };


export const showingNow = () => async (dispatch) => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a&primary_release_date.gte=' + today + '&primary_release_date.lte=' + today,
  );
  dispatch({type: 'SHOWING_NOW', payload: response.data.results});
};

export const movieByGenre = (genreType) => async (dispatch) => {
  dispatch({type: 'MOVIE_GENRE_REQ'})
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + genreType
  );

  dispatch({type: 'MOVIE_GENRE_SUCCESS', payload: response.data.results});
};

  // https://api.themoviedb.org/3/discover/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a&primary_release_date.gte=2018-10-10&primary_release_date.lte=2018-10-23

  export const addFavourite = (movie) => (dispatch) => {
    dispatch({type: 'ADD_TO_FAVS', payload: movie});
    console.log(movie, 'from actions/index.js');
  };

  export const fetchFavourites = () => (dispatch) => {
    console.log('from actions/index.js FETCH_FAVS');
    dispatch({type: 'FETCH_FAVS'});
  };