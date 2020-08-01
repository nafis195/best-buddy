// Bismillahir Rahmanir Rahim
// Nafis Khan Chowdhury
// Best-Buddy Website
// Date - 07/31/2020
// Time - 3:13 PM





import React, { useState } from 'react';
import './Buddy.css'
import Friend from '../Friend/Friend';
import Summary from '../Summary/Summary';
import fakedata from '../../fakedata/users'

const Buddy = () => {
    const users = fakedata.slice(0, 10);
    const [people, setPeople] = useState(users);

    return (
        <div className="buddy">
            <div className="friend-container">
                {people.map(people => <Friend people={people}></Friend>)}
            </div>
            <div className="summary-container">
                <Summary></Summary>
            </div>
        </div>
    );
};

export default Buddy;