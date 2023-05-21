import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form action="get">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" min="0.01" step="0.01" id="amount" required />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" required />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
