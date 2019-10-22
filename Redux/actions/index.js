// import jsonPlaceholder from '../../apis';


import axios from 'axios';

  export const fetchMovies = () => async (dispatch) => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/week?api_key=4c53c4a41e79851aed7a70a5c9e19e9a',
    );
    console.log(response);

    dispatch({type: 'FETCH_MOVIES', payload: response.data.results});
  };


  export const searchMovies = (term) => async (dispatch) => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie?api_key=4c53c4a41e79851aed7a70a5c9e19e9a',{
        params: {query: term},
      }
      // 'https://api.themoviedb.org/3/search/company?api_key=4c53c4a41e79851aed7a70a5c9e19e9a&query={insert user query here}&page=1'
    );
    console.log(response, 'User Search Action');

    dispatch({type: 'SEARCH_MOVIES', payload: response.data.results});
  };
  // axios.create({
  //   baseUrl: "https://api.themoviedb.org"
  // });