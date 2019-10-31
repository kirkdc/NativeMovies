export default (state = [], action) => {
  switch(action.type) {
    case 'SHOWING_NOW':
      return action.payload;
      default:
        return state;
  }
};