import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const setUserInput = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }  
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      ...state,
      date: new Date(state.date)
    };

    props.onFormSubmit(expenseData);

    setState({
      title: '', 
      amount: '', 
      date: ''
    });
  }

  const [state, setState] = useState({
    title: '', 
    amount: '', 
    date: ''
  });
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input value={state.title} onChange={setUserInput} type="text" name='title' id='title'/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input value={state.amount} onChange={setUserInput} type="number" min='0.01' step='0.01' name='amount' id='amount'/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input value={state.date} onChange={setUserInput} type="date" min='2019-01-01' max='2023-12-31' name='date' id='date'/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;