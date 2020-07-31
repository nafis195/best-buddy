// Bismillahir Rahmanir Rahim
// Nafis Khan Chowdhury
// Best-Buddy Website
// Date - 07/31/2020
// Time - 3:13 PM





import React from 'react';
import './Buddy.css'
import Friend from '../Friend/Friend';
import Summary from '../Summary/Summary';

const Buddy = () => {
    return (
        <div className="buddy">
            <Friend></Friend>
            <Summary></Summary>
        </div>
    );
};

export default Buddy;