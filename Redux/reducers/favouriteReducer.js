
const initialState = {
  favourites: {},
  random: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVS': {
      const existingFavs = state.favourites && state.favourites.favouriteMovies ? JSON.parse(JSON.stringify(state.favourites.favouriteMovies)) : [];
      const favouriteMovies = existingFavs;
      favouriteMovies.push(action.payload);
      console.log(state, 'from favouriteReducer');
      return Object.assign(state, { favourites: { favouriteMovies, random: Math.random()} });
    }
    case 'FETCH_FAVS': {
      const existingFavs = state.favourites && state.favourites.favouriteMovies ? JSON.parse(JSON.stringify(state.favourites.favouriteMovies)) : [];
      const favouriteMovies = existingFavs;
      return Object.assign(state, { favourites: { favouriteMovies, random: Math.random()} });
    }
    default:
      return state;
  }
};
