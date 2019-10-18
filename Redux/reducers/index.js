import {combineReducers } from 'redux';
import movieReducer from './movieReducer';

export default combineReducers({
  //the below one is for the HomeScreen
  trendingMovies: movieReducer
  //add more reducers for other screens
});