import { createContext, useState } from "react";

const expenseDataContext = createContext([]);

function ExpenseDataProvider({ children }) {
  const [expenseData, setDate] = useState([]);

  const addExpenseLog = (newLog) => {
    setDate([...expenseData, newLog]);
  };

  const deleteExpenseLog = (id) => {
    setDate(expenseData.filter((log) => id !== log.id));
  };

  const balance = () => {
    if (expenseData.length < 1) return;
    expenseData.reduce((total, log) => {
      if (log.type === "income") return total + log.amount;
      if (log.type === "expense") return total - log.amount;
    });
  };

  const value = { expenseData, addExpenseLog, balance, deleteExpenseLog };

  return (
    <expenseDataContext.Provider value={value}>
      {children}
    </expenseDataContext.Provider>
  );
}

export default expenseDataContext;
export { ExpenseDataProvider };
