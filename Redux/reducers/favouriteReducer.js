import {AsyncStorage} from '@react-native-community/async-storage';


export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_TO_FAVS':
      return action.payload;
      case 'GET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

