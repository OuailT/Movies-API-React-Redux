import React, {useState} from "react";
import {FiShare2} from "react-icons/fi";
import {FiHeart} from "react-icons/fi";
import {BiShoppingBag} from "react-icons/bi";
// import './MoviesCardList.css';

const ImgPath = "https://image.tmdb.org/t/p/w1280";

const SingleMovieCard = ({id , title, poster_path, overview}) => {
    const [selected, isSelected] = useState(null);
    
    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <article key={id} className="card"
                onMouseEnter= {()=> isSelected(id)}
                onMouseLeave={()=> isSelected(null)}>
                   <img src={`${ImgPath}` + poster_path} alt={title} className="image"/>
                   {selected === id && <video src={trailer} autoPlay={true} loop/>}
                   <div className="body-card">
                   <h1>{title}</h1>
                   <p>{`${overview.substring(0,200)}...`}</p>
                   </div>
                   <div className="services">
                       <FiShare2 className="icon"/>
                       <FiHeart className="icon"/>
                       <div className="btn-icon">
                           <button>Buy Ticket</button>
                           <BiShoppingBag className="icon"/>
                       </div>
                   </div>
               </article>
    )
}


export default SingleMovieCard;