import React from 'react';
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard';
import './MoviesCardList.css';

const MoviesCardList = ({moviesList}) => {
    return (
       moviesList.map((singleMovie)=> {
            return (
               <SingleMovieCard key={singleMovie.id} {...singleMovie}/>
            )
       })
          
    )
}

export default MoviesCardList;
