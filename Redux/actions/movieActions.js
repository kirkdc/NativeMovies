import axios from 'axios'

export const loadMovie = () => {

    return (dispatch, getState) => {

        dispatch({ type: 'LOAD_MOVIE_START' })
        axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=4c53c4a41e79851aed7a70a5c9e19e9a').then(function (response) {
            console.log(response)
            dispatch({ type: 'LOAD_MOVIE_SUCCESS', payload: response.data })

        }).catch(function (error) {
            dispatch({ type: 'LOAD_MOVIE_FAILURE', payload: error })
        })
    }

}