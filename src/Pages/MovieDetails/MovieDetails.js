import React, {useEffect, useState} from 'react'
import { Add, Remove } from '@material-ui/icons';
import './MovieDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams  } from 'react-router';
import { getMovie, removeMovie, MovieQuantity } from '../../Redux/Actions/Actions';

import axios from 'axios';

const ImgPath = "https://image.tmdb.org/t/p/w1280";

const MovieDetails = () => {
    const [quantity, setQuantity] = useState(1)
    const singleMovie = useSelector((state)=> state.movie);
    const quantityBag = useSelector((state)=> state.quantity);
    const {title, poster_path, overview} = singleMovie;
    const dispatch = useDispatch();
    let {movieId} = useParams();
    console.log(movieId);

    
    // Handle Click Quantity
    const handleQuantity = (type) => {
        if(type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    // add to cart Handler
    const CartHandler = () => {
        dispatch(MovieQuantity(quantityBag))
    }


    // Get a single Product & Remove product
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
                        <Remove className="quantity-icon" onClick={()=> handleQuantity("dec")}/>
                        <span className="amount">{quantity}</span>
                        <Add className="quantity-icon" onClick={()=> handleQuantity("incr")}/>
                    </div>
                    <button className="btn-add" onClick={()=> CartHandler()}>Add To Card</button>
                </div>
                
            </div> 
        </section>
    )
}

export default MovieDetails
