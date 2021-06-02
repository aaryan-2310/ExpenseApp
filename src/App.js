import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Furtados",
    amount: 300000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "iPhone",
    amount: 115200,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "Alienware",
    amount: 250000,
    date: new Date(2019, 4, 19),
  },
  {
    id: "e4",
    title: "Klipsch",
    amount: 200000,
    date: new Date(2020, 3, 25),
  },
];

function App() {

  const [expenses, setExpenses]= useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpense => {
      return [expense,...prevExpense];
    });
  };

  return (
    <div className="App">
      <h2>Expense Calculator</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
