// Bismillahir Rahmanir Rahim
// Nafis Khan Chowdhury
// Best-Buddy Website
// Date - 07/31/2020
// Time - 3:00 PM





import React from 'react';
import './Summary.css'

const Summary = (props) => {
    const summary = props.summary;

    let totalSalary = 0;
    for(let i = 0; i < summary.length; i++)
    {
        const buddy = summary[i];
        totalSalary = totalSalary + buddy.salary;
    }

    let tax = 0;
    if(totalSalary < 10000){
        tax = totalSalary / 10;
    }
    else if(totalSalary > 50000 && totalSalary < 100000){
        tax = totalSalary / 5;
    }
    else{
        tax = totalSalary / 2;
    }

    let avgSalary = 0;
    if(totalSalary === 0){
        avgSalary = 0;
    }
    else{
        avgSalary = totalSalary / summary.length;
    }

    return (
        <div className="summary">
            <h3>Buddy Summary</h3>
            <p>Total Friends: {summary.length}</p>
            <p>Total Salary: ${totalSalary}</p>
            <p>Total Tax: ${tax}</p>
            <p>Avg. Salary: ${avgSalary}</p>
        </div>
    );
};

export default Summary;