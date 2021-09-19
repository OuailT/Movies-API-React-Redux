import React, {useState} from 'react';
import './MovieCard.css';

// []  Hover on the card get the video trailer
// []  ShowLess and ShowMore 
// [x] Create a button //
// [x] Create an array to toggle
// [x] toggle the text based on the button


const ImgPath = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({moviesList}) => {
    return (
       moviesList.map((singleMovie)=> {
           const {id , title, poster_path, overview} = singleMovie;
            return (
               <article key={id} className="card">
                   <img src={`${ImgPath}` + poster_path} alt={title}/>
                   <div className="body-card">
                   <h1>{title}</h1>
                   <p>{`${overview.substring(0,200)}...`}</p>
                   </div>
               </article>
            )
       })
    )
}

export default MovieCard
