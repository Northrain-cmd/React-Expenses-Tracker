import React, { useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import ExpensesChart from './components/Expenses/ExpensesChart';

function App() {
  const initialExpenses = [
    {
      title: "Internet",
      date: new Date(2021, 7, 31),
      price: 125,
      id: 1
    },
    {
      title: "Phone bill",
      date: new Date(2021, 10, 10),
      price: 50,
      id: 2
    },
    {
      title: "Car insurance",
      date: new Date(2020, 4, 1),
      price: 321,
      id: 3
    },
    {
      title: "Rent",
      date: new Date(2020, 4, 25),
      price: 700, id: 4
    },
  ]

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const [expenses, setExpenses] = useState(initialExpenses);

  const filteredExpenses = expenses.filter(obj => obj.date.getFullYear().toString() === filteredYear);

  const onFormSubmit = (data) => {
    setExpenses(prevArray => {
      return [data, ...prevArray]
    })
  }

  
  


  return (
    <div className="App">
      <NewExpense onFormSubmit={onFormSubmit}></NewExpense>
      <ul className="expenses-list">
        <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
        {filteredExpenses.length === 0 && <p className='not-found'>No expenses found for this year</p>}
        {filteredExpenses.length > 0 && <ExpensesChart expenses={filteredExpenses}></ExpensesChart> }
        {filteredExpenses.map(obj => {
          return (
            <li key = {obj.id}>
              <ExpenseItem title ={obj.title} 
                          date = {obj.date} 
                          price = {obj.price}>
              </ExpenseItem>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
