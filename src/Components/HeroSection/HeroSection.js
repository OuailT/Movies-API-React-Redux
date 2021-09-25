import React,{useEffect, useState} from 'react'
import './HeroSection.css';
import axios from 'axios';

import "../MoviesCardList/MoviesCardList.css";

import MoviesCardList from '../MoviesCardList/MoviesCardList';

const URL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


// [x] fetch the data 
// [x] Error Handler
// [x] display the data
// [x] style the container

const HeroSection = () => {
    const [movies, setMovies] = useState([]);

//fetchData inside use Effect
useEffect(()=> {
    try {
        const fetchMovie = async () => {
            const response = await axios.get(`${URL}`)
            const data = await response.data;
            setMovies(data.results);
            console.log(data.results);
        }
        fetchMovie();

    } catch(error) {
        console.log(`ERROR : ${error}`)
    }
},[])

    return (
        <section className="moviesContainer">
            <div className="grid-container">
                <MoviesCardList moviesList={movies}/>
        
            </div>
        </section>

        
    )
}

export default HeroSection
