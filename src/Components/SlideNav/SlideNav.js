import React from 'react';
import './SlideNav.css'
import {GrClose} from 'react-icons/gr';

const SlideNav = ({showClass, toggleHandler, removeClass}) => {
    return (
    <div className={`pop-up-container ${showClass}`}>
       <nav className="pop-up">
           <GrClose className="pop-up-close" onClick={()=> toggleHandler()}/>
           <div className="product-details">
               <div className="img-container">
                   <img src="./Pictures/FreeGuy.jpg" alt="FreeGuy" />
               </div>
               <div className="product info">
                   <h1 className="title">Free Guy movie</h1>
                   <div className="quantity">
                       <h4>Quantity</h4>
                       <span>4</span>
                   </div>
                   <h5 className="prix">11$</h5>
                   <button className="btn-checkout">Continue to checkout</button> 
               </div>
           </div>
       </nav>
    </div>
    )
}

export default SlideNav;
