import { createContext, useState } from "react";

const expenseDataContext = createContext([]);

function ExpenseDataProvider({ children }) {
  const [data, setDate] = useState([]);

  const addExpenseLog = (newLog) => {
    setDate([...data, newLog]);
  };

  const value = { data, addExpenseLog };

  return (
    <expenseDataContext.Provider value={value}>
      {children}
    </expenseDataContext.Provider>
  );
}

export default expenseDataContext;
export { ExpenseDataProvider };
