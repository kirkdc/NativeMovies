export default (state = [], action) => {
  switch(action.type) {
    case 'MOVIE_GENRE_SUCCESS':
      return action.payload;
    case 'MOVIE_GENRE_REQ':
      return [];
      default:
        return state;
  }
};