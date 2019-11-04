export const addFavourite = movie => async dispatch => {
  console.log('Initial - start');
  const existingFavMoviesLDB = await AsyncStorage.getItem('favourite_movies');
  console.log('before setting any data', existingFavMoviesLDB);
  let favMovies = [];
  if (!existingFavMoviesLDB) {
    favMovies.push(movie);
  }
  if (!!existingFavMoviesLDB) {
    favMovies = JSON.parse(existingFavMoviesLDB);
    favMovies.push(movie);
  }
  console.log('setting data inside ldb');
  await AsyncStorage.setItem('favourite_movies', JSON.stringify(favMovies));
  console.log('set data successfully');
  const favMoviesInsideAS = await AsyncStorage.getItem('favourite_movies');
  console.log(favMoviesInsideAS, 'data read from ldb');
  dispatch({type: 'ADD_TO_FAVS', payload: JSON.parse(favMoviesInsideAS)});
};



// generic function

const writeAndReadFromLdb = async (ldbKey, data) => {
  const existingArrayLDB = await AsyncStorage.getItem(ldbKey);
  console.log('before setting any data', existingArrayLDB);
  let array = [];
  if (!existingArrayLDB) {
    array.push(data);
  }
  if (!!existingArrayLDB) {
    array = JSON.parse(existingArrayLDB);
    array.push(data);
  }
  console.log('setting data inside ldb');
  await AsyncStorage.setItem(ldbKey, JSON.stringify(array));
  console.log('set data successfully');
  const arrayInsideAS = await AsyncStorage.getItem(ldbKey);
  console.log(arrayInsideAS, 'data read from ldb');
  return arrayInsideAS;
}