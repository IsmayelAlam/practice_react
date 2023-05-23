import "./css/Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpenseChart";

function Expense(props) {
  const [filterYear, setFilterYear] = useState("2020");

  function filterChange(selectedYear) {
    setFilterYear(selectedYear);
  }

  const filteredExpenses = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChange} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expense;
