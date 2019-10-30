import {combineReducers } from 'redux';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';
import recentReducer from './recentReducer'
import genreReducer from './genreReducer'


export default combineReducers({
  //the below one is for the HomeScreen
  trendingMovies: movieReducer,
  searchMovies: searchReducer,
  showingMovies: recentReducer,
  topInGenre: genreReducer,
  //add more reducers for other screens
});