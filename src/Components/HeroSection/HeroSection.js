import React,{useEffect, useState} from 'react'
import './HeroSection.css';
import axios from 'axios';
import "../MoviesCardList/MoviesCardList.css";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useSelector, useDispatch } from 'react-redux';
import {setMovies} from "../../Redux/Actions/Actions";
import Loader from '../Loader/Loader';

const URL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const HeroSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    //useSelector to read the state from the store
    const moviesList = useSelector((state)=> state.allMovies.movies);
    const dispatch = useDispatch();


//fetchData inside use Effect
useEffect(()=> {
    try {
        
        const fetchMovie = async () => {
            const response = await axios.get(`${URL}`)
            const data = await response.data;
            // setMovies(data.results);
            dispatch(setMovies(data.results));
            setIsLoading(false)
            console.log(data.results);
        }
        setTimeout(()=> {
            fetchMovie();
        }, 3000)
        
    } catch(error) {
        console.log(`ERROR : ${error}`)
    }
},[])

    if(isLoading) {
        return (
            <Loader/>
        )
    } else {
        return (
            <section className="moviesContainer">
                <div className="grid-container">
                    <MoviesCardList />
                </div>
            </section>
            )
    }
    
}

export default HeroSection
