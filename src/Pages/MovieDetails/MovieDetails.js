import React from 'react'
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineMinusCircle} from "react-icons/ai"
import './MovieDetails.css';
import { useSelector } from 'react-redux';
import { useParams  } from 'react-router';

const ImgPath = "https://image.tmdb.org/t/p/w1280";

const MovieDetails = () => {
    const MoviesList = useSelector((state)=> state.allMovies.movies);
    let {movieId} = useParams();
    console.log(movieId);
    return (
        <section className="movieDetails_container">
            <div className="wrapper">
                <div className="img-container">
                    <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" alt="Hat"/>
                </div>

                <div className="info-container">
                    <h1>Hello guys</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptate, quibusdam facilis numquam blanditiis ipsa. Dolorum commodi quae placeat fugiat! Quibusdam commodi minima, nisi dolorum voluptatem officia obcaecati ut nemo.</p>
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
