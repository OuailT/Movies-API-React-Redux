import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { LocalMall } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const quantity = useSelector((state)=> state.quantity);
    return (
        <nav className="navBar-section">
            <Link to="/">
                <h1 className="logo">映画館</h1>
            </Link>

            <Badge badgeContent={quantity} color="primary">
                 <LocalMall className="icon-bag" />
            </Badge>
        </nav>
    )
}

export default Navbar
