import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function SaveExpenseHandler(enterExpenseData) {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };

    props.noAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={SaveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
