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
    console.log(response, "fetchMovies redux/actions/index.js");

    dispatch({type: 'FETCH_MOVIES', payload: response.data.results});
  };


  export const searchMovies = (term) => async (dispatch) => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a',{
        params: {query: term},
      }
    );
    console.log(response, 'searchMovies redux/actions/index.js');

    dispatch({type: 'SEARCH_MOVIES', payload: response.data.results});
  };


export const showingNow = () => async (dispatch) => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a&primary_release_date.gte=' + today + '&primary_release_date.lte=' + today,
  );
  console.log(response),  "showingNow redux/actions/index.js";

  dispatch({type: 'SHOWING_NOW', payload: response.data.results});
};

export const movieByGenre = (genreType) => async (dispatch) => {
  console.log(genreType, "from actions/index.js")
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + genreType
  );
  console.log(response),  "movieByGenre redux/actions/index.js";

  dispatch({type: 'MOVIE_GENRE', payload: response.data.results});
};

  // https://api.themoviedb.org/3/discover/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a&primary_release_date.gte=2018-10-10&primary_release_date.lte=2018-10-23

