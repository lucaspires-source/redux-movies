import React from 'react'
import {connect} from 'react-redux'
const MovieDetails = (props) => {
        if(!props.selectedMovie){
            return(
            <div>
                <h2>Movie</h2>
                <div>
                    <p>Select Movie</p>
                </div>
            </div>
                )

        }else{
            return(
            <div>
                <h2>Movie</h2>
                <div>
                    <p>Title:{props.selectedMovie.title}</p>
                    <p>Title:{props.selectedMovie.releaseDate}</p>
                    <p>Title:{props.selectedMovie.rating}</p>
                </div>
            </div>
            )
        }

}
const mapStateToProps = (state) =>{
    return{
        selectedMovie:state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails)