import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const onFormSubmit = (data) => {
    const expenseData = {
      ...data,
      id: Math.floor(Math.random() * 100)
    }
    props.onFormSubmit(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={onFormSubmit}></ExpenseForm>
    </div>
  )
}

export default NewExpense;