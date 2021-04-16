import {combineReducers} from 'redux'

const moviesReducer = () => {
  return [
    {
      title: "Like Someone in Love",
      releaseDate: "2012",
      rating: 3.8,
    },
    {
      title: "Playing",
      releaseDate: "2007",
      rating: 4.5,
    },
    {
      title: "It’s a Wonderful Life",
      releaseDate: "1946",
      rating: 4.3,
    },
    {
      title: "Tokyo Drifter",
      releaseDate: "1966",
      rating: 3.8,
    },
  ];
};


const selectedMovieReducer = (state= null, action) =>{
    switch(action.type){
        case'MOVIE_SELECTED':
            return action.payload
        default:
            return state
    }
}

export default combineReducers(
    {
        movies:moviesReducer,
        selectedMovie:selectedMovieReducer
    }
)