import { useContext } from "react";
import expenseDataContext from "../context/expenseDataContext";

export default function SideBar() {
  const { expenseData } = useContext(expenseDataContext);

  const totalBalance =
    expenseData.length > 0
      ? expenseData.reduce((total, log) => {
          if (log.type === "income") total += log.amount;
          if (log.type === "expense") total -= log.amount;

          return total;
        }, 0)
      : "000";

  const totalIncome =
    expenseData.length > 0
      ? expenseData.reduce((total, log) => {
          if (log.type === "income") total += log.amount;

          return total;
        }, 0)
      : "000";

  const totalExpense =
    expenseData.length > 0
      ? expenseData.reduce((total, log) => {
          if (log.type === "expense") total += log.amount;

          return total;
        }, 0)
      : "000";

  return (
    <div className="row-span-full p-10 select-none flex flex-col border-r-2 border-slate-600 shadow">
      <h1 className="text-center text-3xl uppercase p-5 font-semibold">
        Expense tracker
      </h1>
      <hr className="border border-stone-600" />

      <div className="mt-20">
        <h2 className="font-bold">Your Balance</h2>
        <p className="text-5xl m-2">$ {totalBalance}</p>
      </div>

      <div className="my-20">
        <h2 className="font-bold text-center text-xl">Cash Flow</h2>
        <div className="p-10 border-2 border-green-600 rounded-md uppercase my-5 text-green-600 font-bold shadow-md text-center">
          <p>Income</p>
          <p className="text-3xl font-normal">$ {totalIncome}</p>
        </div>
        <div className="p-10 border-2 border-red-600 rounded-md uppercase my-5 text-red-600 font-bold shadow-md text-center">
          <p>Expense</p>
          <p className="text-3xl font-normal">$ {totalExpense}</p>
        </div>
      </div>
    </div>
  );
}
