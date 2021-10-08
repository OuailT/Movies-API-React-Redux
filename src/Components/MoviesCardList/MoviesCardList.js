import React from 'react';
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard';
import './MoviesCardList.css';
import { useSelector } from 'react-redux';

const MoviesCardList = () => {
   const moviesList = useSelector((state)=> state.allMovies.movies);
    return (
         moviesList.map((singleMovie)=> {
            return (
               <SingleMovieCard key={singleMovie.id}
                                    {...singleMovie}/>
            )
       })
          
    )
}

export default MoviesCardList;
