export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_FAVS': {
      const favouriteMovies = state;

      favouriteMovies.push(action.payload);
      return favouriteMovies;
    }

    default:
      return state;
  }
};
