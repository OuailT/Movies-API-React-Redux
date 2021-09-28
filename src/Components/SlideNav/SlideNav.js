import React from 'react';
import './SlideNav.css'

const SlideNav = () => {
    return (
       <nav className="slide">
           <div className="product-details">
               <div className="img-container">
                   <img src="./Pictures/FreeGuy.jpg" alt="FreeGuy" />
               </div>
               <div className="product info">
                   <h1 className="title">Cream for skin shining fame</h1>
                   <div className="quantity">
                       <h4>Quantity</h4>
                       <span>4</span>
                   </div>
                   <h5 className="prix">11$</h5>
                   <button className="btn-checkout">Continue to checkout</button> 
               </div>
               
           </div>
           
       </nav>
    )
}

export default SlideNav;
