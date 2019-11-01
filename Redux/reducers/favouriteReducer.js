import {AsyncStorage} from 'react-native';


export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_MOVIES':
      AsyncStorage.setItem('save', state);
      return state;
      case 'FETCH_MOVIES':
      AsyncStorage.getItem('fetch', state);
      return state;
    default:
      return state;
  }
};



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
