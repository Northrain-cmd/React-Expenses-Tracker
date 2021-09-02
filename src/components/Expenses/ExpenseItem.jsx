import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="title-div">
        <h2 className="title">{props.title}</h2>
      </div>
      <div className="price-div">
        <h2 className="price">${props.price}</h2>
      </div>
    </div>
  )
}

export default ExpenseItem;