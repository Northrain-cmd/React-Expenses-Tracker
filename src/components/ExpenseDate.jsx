import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {

  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", {day: '2-digit'});
  const month = props.date.toLocaleString("en-US", {month: 'long'});

  return (
    <div className="date-div">
      <h2 className="month">{month}</h2>
      <h3 className="year">{year}</h3>
      <h2 className="day">{day}</h2>
    </div>
  )
}

export default ExpenseDate;