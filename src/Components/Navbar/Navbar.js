import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { LocalMall } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const quantityBag = useSelector((state)=> state.quantity);
    return (
        <nav className="navBar-section">
            <Link to="/">
                <div className="logo-container">
                    <img className="logo" src="./Pictures/warner-bros.png" alt="Logo"/>
                </div>
            </Link>

            <Badge badgeContent={quantityBag} color="primary">
                 <LocalMall className="icon-bag" />
            </Badge>
        </nav>
    )
}

export default Navbar
