import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { ExpenseDataProvider } from "./Components/context/expenseDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ExpenseDataProvider>
    <App />
  </ExpenseDataProvider>
);
