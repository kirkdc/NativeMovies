export default (state = [], action) => {
  switch(action.type) {
    case 'MOVIE_GENRE':
      return action.payload;
      default:
        return state;
  }
};