import {combineReducers } from 'redux';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';


export default combineReducers({
  //the below one is for the HomeScreen
  trendingMovies: movieReducer,
  searchMovies: searchReducer
  //add more reducers for other screens
});