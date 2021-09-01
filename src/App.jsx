import React, { useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const onFormSubmit = (data) => {
    console.log('Data received', data)
  }
  
  const expenses = [
    {
      title: "Internet",
      date: new Date(2021, 7, 31),
      price: 125
    },
    {
      title: "Phone bill",
      date: new Date(2021, 10, 10),
      price: 50
    },
    {
      title: "Car insurance",
      date: new Date(2020, 4, 1),
      price: 321
    },
    {
      title: "Rent",
      date: new Date(2020, 4, 25),
      price: 700
    },
  ]

  const expensesList = expenses.map(obj => {
    return (
      <li>
        <ExpenseItem title ={obj.title} 
                     date = {obj.date} 
                     price = {obj.price}>
        </ExpenseItem>
      </li>
    )
  })

  return (
    <div className="App">
      <NewExpense onFormSubmit={onFormSubmit}></NewExpense>
      <ul className="expenses-list">
        {expensesList}
      </ul>
    </div>
  )
}

export default App
