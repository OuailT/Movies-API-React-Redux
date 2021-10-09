import React, {useEffect} from 'react'
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineMinusCircle} from "react-icons/ai"
import './MovieDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams  } from 'react-router';
import { getMovie, removeMovie } from '../../Redux/Actions/Actions';

import axios from 'axios';

const ImgPath = "https://image.tmdb.org/t/p/w1280";

const MovieDetails = () => {
    const singleMovie = useSelector((state)=> state.movie);
    const {title, poster_path, overview} = singleMovie;
    const dispatch = useDispatch();
    let {movieId} = useParams();
    console.log(movieId);

    useEffect(()=> {
        try {
            const getSingleMovie = async () => {
                const request = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=04c35731a5ee918f014970082a0088b1`);
                const response = await request.data;
                dispatch(getMovie(response))
            }

            getSingleMovie();

        } catch(error) {
            console.log(`ERROR : ${error}`)
        }

        //Clean up
        return () => {
            dispatch(removeMovie());
        }
            
    }, [movieId])


    return (
        <section className="movieDetails_container">
            <div className="wrapper">
                <div className="img-container">
                    <img src={`${ImgPath}` + poster_path} alt={title}/>
                </div>

                <div className="info-container">
                    <h1>{title}</h1>
                    <p>{overview}</p>
                    <div className="quantity-container">
                        <AiOutlineMinusCircle className="quantity-icon"/>
                        <input value="1" className="input-quantity"/>
                        <AiOutlinePlusCircle className="quantity-icon"/>
                    </div>
                    <button className="btn-add">Add To Card</button>
                </div>
                
            </div> 
        </section>
    )
}

export default MovieDetails
