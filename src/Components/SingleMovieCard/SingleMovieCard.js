import React, {useState} from "react";
import {FiShare2} from "react-icons/fi";
import {FiHeart} from "react-icons/fi";
import {BiShoppingBag} from "react-icons/bi";
// import './MoviesCardList.css';

const ImgPath = "https://image.tmdb.org/t/p/w1280";

const SingleMovieCard = ({id , title, poster_path, overview, toggleHandler}) => {
    const [selected, isSelected] = useState(null);
    return (
        <article key={id} className="card">
                  <div key={id} onMouseEnter= {()=> isSelected(id)} onMouseLeave={()=> isSelected(null)}>
                        <img src={`${ImgPath}` + poster_path} alt={title} className="image"/>
                        {selected === id && <video src="./Trailers/SpaceJam.mp4" autoPlay={true} loop muted/>}
                   </div>
                   <div className="body-card">
                        <h1>{title}</h1>
                        <p>{`${overview.substring(0,200)}...`}</p>
                   </div>
                   <div className="services">
                        <FiShare2 className="icon"/>
                        <FiHeart className="icon"/>
                       <div className="btn-icon-container">
                         <BiShoppingBag className="btn-icon"/>
                         <button onClick={()=> toggleHandler()}>Buy Ticket</button> 
                       </div>
                   </div>
        </article>
    )
}


export default SingleMovieCard;