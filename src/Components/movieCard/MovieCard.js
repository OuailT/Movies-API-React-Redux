import React from 'react';
import './MovieCard.css';

const ImgPath = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({moviesList}) => {
    return (
       moviesList.map((singleMovie)=> {
           const {id , title, poster_path, overview} = singleMovie;
            return (
               <article key={id} className="card">
                   <img src={`${ImgPath}` + poster_path} alt={title}/>
                   <h1>{title}</h1>
                   <p>{overview}</p>
               </article>
            )
       })
    )
}

export default MovieCard
