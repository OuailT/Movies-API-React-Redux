import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { LocalMall } from '@material-ui/icons';

const Navbar = () => {
    return (
        <nav className="navBar-section">
            <Link to="/">
                <h1 className="logo">映画館</h1>
            </Link>

            <Badge badgeContent={4} color="primary">
                 <LocalMall className="icon-bag" />
            </Badge>
        </nav>
    )
}

export default Navbar
