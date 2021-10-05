import React from 'react';
import "./Checkout.css";

const Checkout = () => {
    return (
        <section className="checkout">
            <div className="checkout-container"> 
                <form>
                    <div className="buttons-container">
                        <h5>Express Checkout</h5>
                        <div className="buttons">
                            <button className="btn">G Pay</button>
                            <button className="btn">Shop Pay</button>
                        </div>
                    </div>
                    
                    <small>Or</small>

                    <div className="form-control">
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <h3>Already have an account?<a>Log in</a></h3>
                        </div>
                        <input type="email" placeholder="Email"/>
                        <div className="checkbox-container">
                            <input type="checkbox"/>
                            <h4>Email me with news and offers</h4>
                        </div>
                    </div>

                    <div className="form-control">
                        <h3>Shipping address</h3>
                        <div className="input-container">
                            <input type="text" placeholder="First name"/>
                            <input type="text" placeholder="Last name"/>
                        </div>
                        <input type="text" placeholder="Address"/>
                        <input type="text" placeholder="Apartment,suite,etc.(optional)"/>
                        <input type="number" placeholder="Postal Code"/>
                        <input type="text" placeholder="City"/>
                        <input type="text" placeholder="Country"/>
                        <input type="number" placeholder="Phone"/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Checkout;
