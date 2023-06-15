import { FaSort } from "react-icons/fa";
// FaSortDown, FaSortUp,

import ExpenseLog from "./ExpenseLog";
import { useContext } from "react";
import expenseDataContext from "./context/expenseDataContext";

export default function History() {
  const { expenseData, deleteExpenseLog } = useContext(expenseDataContext);

  return (
    <div className="col-start-2 col-end-6 row-start-1 row-end-5 overflow-y-scroll overflow-x-hidden scrollbar relative">
      <table className="border-collapse">
        <thead>
          <tr
            className={`fixed w-4/5 z-10 bg-slate-800 py-2 grid grid-flow-col grid-cols-header text-center uppercase font-bold text-white`}
          >
            <th>index</th>
            <th>description</th>
            <th className="flex justify-center items-center gap-2">
              <FaSort className="h-5 w-5 m-0" /> <span>date</span>
            </th>
            <th className="flex justify-center items-center gap-2">
              <FaSort className="h-5 w-5 m-0" /> <span>amount</span>
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody className="my-10 uppercase w-full bg-black font-bold absolute">
          {expenseData.map((data, i) => {
            return (
              <ExpenseLog
                data={data}
                i={i}
                key={data.id}
                ondelete={deleteExpenseLog}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
