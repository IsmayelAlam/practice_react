import { FaSort } from "react-icons/fa";
// FaSortDown, FaSortUp,

import { nanoid } from "nanoid";
import ExpenseLog from "./ExpenseLog";

export default function History() {
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
            return <ExpenseLog data={data} i={i} key={data.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

const expenseData = [
  {
    id: nanoid(),
    title: "Car sell",
    date: "20/01/2023",
    amount: "$2500",
    type: "income",
  },
  {
    id: nanoid(),
    title: "movie ticket",
    date: "20/01/2023",
    amount: "$25",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "dinner",
    date: "20/01/2023",
    amount: "$300",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "rent",
    date: "20/01/2023",
    amount: "$3000",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "groceries",
    date: "20/01/2023",
    amount: "$500",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "utility bill",
    date: "20/01/2023",
    amount: "$500",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "salary",
    date: "20/01/2023",
    amount: "$5000",
    type: "income",
  },

  {
    id: nanoid(),
    title: "Car sell",
    date: "20/01/2023",
    amount: "$2500",
    type: "income",
  },
  {
    id: nanoid(),
    title: "movie ticket",
    date: "20/01/2023",
    amount: "$25",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "dinner",
    date: "20/01/2023",
    amount: "$300",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "rent",
    date: "20/01/2023",
    amount: "$3000",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "groceries",
    date: "20/01/2023",
    amount: "$500",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "utility bill",
    date: "20/01/2023",
    amount: "$500",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "salary",
    date: "20/01/2023",
    amount: "$5000",
    type: "income",
  },

  {
    id: nanoid(),
    title: "rent",
    date: "20/01/2023",
    amount: "$3000",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "groceries",
    date: "20/01/2023",
    amount: "$500",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "utility bill",
    date: "20/01/2023",
    amount: "$500",
    type: "expense",
  },
  {
    id: nanoid(),
    title: "salary",
    date: "20/01/2023",
    amount: "$5000",
    type: "income",
  },
  {
    id: nanoid(),
    title: "salary",
    date: "20/01/2023",
    amount: "$5000",
    type: "income",
  },
];
