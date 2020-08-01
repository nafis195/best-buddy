// Bismillahir Rahmanir Rahim
// Nafis Khan Chowdhury
// Best-Buddy Website
// Date - 07/31/2020
// Time - 3:04 PM





import React from 'react';
import './Friend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faHouseUser, faMoneyCheckAlt, faHeart } from '@fortawesome/free-solid-svg-icons'

const Friend = (props) => {
    const {fullname, img, salary, email, phone, company} = props.people;
    console.log(props);
    return (
        <div className="friend">
            <div className="friend-images">
                <img src={img} alt="" />
            </div>
            <div className="friend-info">
                <h2>{fullname}</h2>
                <h4><FontAwesomeIcon icon={faEnvelope}/> Email: {email}</h4>
                <h4><FontAwesomeIcon icon={faPhone}/> Phone: {phone}</h4>
                <h4><FontAwesomeIcon icon={faHouseUser}/> Company: {company}</h4>
                <h4><FontAwesomeIcon icon={faMoneyCheckAlt}/> Salary: ${salary}</h4>
                <button><FontAwesomeIcon icon={faHeart}/> Add to favorite</button>
            </div>
        </div>
    );
};

export default Friend;