// Bismillahir Rahmanir Rahim
// Nafis Khan Chowdhury
// Best-Buddy Website
// Date - 07/30/2020
// Time - 9:25 PM





import React from 'react';
import logo from '../images/logo.JPG'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="logo">
                <h1>Best</h1>
                <img src={logo} alt="" />
                <h1>Buddy</h1>
            </div>
            <div className="navbar">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/manage">Manage Friend</a>
                    <a href="/review">Review Friend</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;