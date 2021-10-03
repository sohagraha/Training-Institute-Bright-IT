import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <h1>Raha IT Institute</h1>
            <nav>
                <NavLink to='/home' >Home</NavLink>
                <NavLink to='/about-us'>About Us</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/home'>Home</NavLink>

            </nav>
        </div>
    );
};

export default Header;