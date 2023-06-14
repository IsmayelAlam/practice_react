import { BsFillTrashFill } from "react-icons/bs";
import { nanoid } from "nanoid";

export default function History() {
  const className =
    "grid grid-flow-col grid-cols-header text-center uppercase font-bold text-white";

  return (
    <div className="col-start-2 col-end-6 row-start-1 row-end-5 overflow-y-scroll overflow-x-hidden scrollbar relative">
      <table className="border-collapse">
        <thead>
          <tr className={`fixed w-4/5 z-10 bg-slate-700 py-2 ${className}`}>
            <th>index</th>
            <th>description</th>
            <th>date</th>
            <th>amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="my-10 z-0 uppercase w-full bg-black font-bold absolute">
          {datas.map((data, i) => {
            console.log(`bg-slate-${(i % 3) + 5}00`);
            const bg = i % 3 === 0 ? "bg-slate-600" : "bg-slate-800";
            return (
              <tr className={`w-full ${bg} ${className}`} key={data.id}>
                <td className="border-r-2 border-y py-2 px-2">{i + 1}</td>
                <td className="border-x-2 border-y py-2 text-start px-5 capitalize">
                  {data.title}
                </td>
                <td className="border-x-2 border-y py-2">{data.date}</td>
                <td
                  className={`border-x-2 border-y py-2 + ${
                    data.type === "income" ? "bg-green-400" : "bg-red-400"
                  }
                  `}
                >
                  {data.amount}
                </td>
                <td className="border-l-2 border-y py-2 px-2 cursor-pointer ">
                  <BsFillTrashFill className="h-7 w-7" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const datas = [
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
];
