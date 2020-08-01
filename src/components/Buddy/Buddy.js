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
    const users = fakedata.slice(0, 15);
    const [people, setPeople] = useState(users);
    const [summary, setSummary] = useState([]);

    const handleAddFriend = (people) =>{
        const newSummary = [...summary, people];
        setSummary(newSummary);
    }

    return (
        <div className="buddy">
            <div className="friend-container">
                {people.map(people => <Friend 
                    handleAddFriend={handleAddFriend}
                    people={people}
                    ></Friend>)}
            </div>
            <div className="summary-container">
                <Summary summary={summary}></Summary>
            </div>
        </div>
    );
};

export default Buddy;