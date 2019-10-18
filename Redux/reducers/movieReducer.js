
let initialState = {
  data: [],
  isLoading: false,
  error: null
}

export default movies = (state = initialState, action) => {
  switch (action.type) {
      case 'LOAD_MOVIE_START':
          return Object.assign({}, state, { isLoading: true })
      case 'LOAD_MOVIE_SUCCESS':
          return Object.assign({}, state, { data: action.payload, isLoading: false })
      case 'LOAD_MOVIE_FAILURE':
          return Object.assign({}, state, { error: action.payload, isLoading: false })
      default:
          return state
  }
}