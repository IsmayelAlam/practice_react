export default function History() {
  const className =
    "grid grid-flow-col grid-cols-header text-center uppercase font-bold text-white";

  return (
    <div className="col-start-2 col-end-6 row-start-1 row-end-5 overflow-y-scroll overflow-x-hidden scrollbar relative">
      <table class="border-collapse">
        <thead>
          <tr
            className={`fixed w-4/5 z-10 bg-slate-700 py-2 px-5 ${className}`}
          >
            <th>index</th>
            <th>description</th>
            <th>date</th>
            <th>amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="my-10 z-0 uppercase w-full bg-black font-bold absolute">
          {datas.map((data, i) => {
            return (
              <tr className={`w-full bg-slate-400 ${className}`}>
                <td className="border-r-2 border-y py-2 px-2">{i + 1}</td>
                <td className="border-x-2 border-y py-2 text-start px-5 capitalize">
                  {data.title}
                </td>
                <td className="border-x-2 border-y py-2">20/01/2023</td>
                <td className="border-x-2 border-y py-2 bg-green-400">2500</td>
                <td className="border-l-2 border-y py-2 px-2">icon</td>
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
    id: 1,
    title: "Car sell",
    date: "20/01/2023",
    amount: "$2500",
    type: "income",
  },
  {
    id: 2,
    title: "movie ticket",
    date: "20/01/2023",
    amount: "$2500",
    type: "expense",
  },
  {
    id: 3,
    title: "dinner",
    date: "20/01/2023",
    amount: "$2500",
    type: "expense",
  },
  {
    id: 4,
    title: "groceries",
    date: "20/01/2023",
    amount: "$2500",
    type: "expense",
  },
  {
    id: 5,
    title: "utility bill",
    date: "20/01/2023",
    amount: "$2500",
    type: "expense",
  },
];
