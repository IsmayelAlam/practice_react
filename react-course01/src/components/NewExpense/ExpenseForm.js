import "./ExpenseForm.css";

import React, { useState } from "react";

function ExpenseForm(props) {
  const [enterTitle, setTitle] = useState("");
  const [enterAmount, setAmount] = useState("");
  const [enterDate, setDate] = useState("");
  function titleChange(event) {
    setTitle(event.target.value);
  }
  function amountChange(event) {
    setAmount(event.target.value);
  }
  function dateChange(event) {
    setDate(event.target.value);
  }

  function submitForm(e) {
    e.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpense(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            required
            value={enterTitle}
            onChange={titleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            required
            value={enterAmount}
            onChange={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            required
            value={enterDate}
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
