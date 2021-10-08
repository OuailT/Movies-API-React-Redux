import React from 'react'
import './Navbar.css';
import {GiPopcorn} from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <h1 className="logo"></h1>
                <GiPopcorn className="logo-icon"/>
            </Link>
        </nav>
    )
}

export default Navbar
