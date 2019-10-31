export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_FAVS': {
      const favouriteMovies = state;
      console.log(favouriteMovies, "faourite");

      favouriteMovies.push(action.payload);
      return favouriteMovies;
    }

    default:
      return state;
  }
};
