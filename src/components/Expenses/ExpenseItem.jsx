import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
  }

  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="title-div">
        <h2 className="title">{title}</h2>
      </div>
      <div className="price-div">
        <h2 className="price">${props.price}</h2>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  )
}

export default ExpenseItem;