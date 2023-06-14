export default function SideBar() {
  return (
    <div className="row-span-full p-10 select-none flex flex-col">
      <h1 className="text-center text-3xl uppercase p-5 font-semibold">
        Expense tracker
      </h1>
      <hr />
      <div className="my-20">
        <h2 className="font-bold">Your Balance</h2>
        <p className="text-4xl m-2">$ 750</p>
      </div>
      <div className="my-20">
        <h2 className="font-bold text-center text-xl">Cash Flow</h2>
        <div className="p-10 border-4 border-green-600 rounded-md uppercase my-5 text-green-600 text-lg shadow-md">
          income - $1950
        </div>
        <div className="p-10 border-4 border-red-600 rounded-md uppercase my-5 text-red-600 text-lg shadow-md">
          Expense - $1250
        </div>
      </div>
    </div>
  );
}
