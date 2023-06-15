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

  const value = { expenseData, addExpenseLog, deleteExpenseLog };

  return (
    <expenseDataContext.Provider value={value}>
      {children}
    </expenseDataContext.Provider>
  );
}

export default expenseDataContext;
export { ExpenseDataProvider };
