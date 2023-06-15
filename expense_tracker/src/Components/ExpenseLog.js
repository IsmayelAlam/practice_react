import { FaTrashAlt } from "react-icons/fa";

export default function ExpenseLog({ data, i }) {
  const bg = i % 3 === 0 ? "bg-slate-500" : "bg-slate-700";

  return (
    <tr
      className={`w-full grid grid-flow-col grid-cols-header text-center uppercase font-bold text-white ${bg} `}
    >
      <td className="border-r-2 border-y py-2 px-2">{i + 1}</td>

      <td className="border-x-2 border-y py-2 text-start px-5 capitalize">
        {data.title}
      </td>

      <td className="border-x-2 border-y py-2">{data.date}</td>

      <td
        className={`border-x-2 border-y py-2 + ${
          data.type === "income" ? "bg-green-400" : "bg-red-400"
        }`}
      >
        {data.amount}
      </td>

      <td className="border-l-2 border-y py-2 px-2 cursor-pointer ">
        <FaTrashAlt className="h-7 w-7" />
      </td>
    </tr>
  );
}
