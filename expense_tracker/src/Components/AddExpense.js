export default function AddExpense() {
  return (
    <div className="col-start-2 col-end-6 flex items-center border-t-2 bg-white ">
      <form className="w-full flex gap-10 items-center px-10">
        <div className="flex flex-col text-lg w-1/5 uppercase">
          <label htmlFor="name">description</label>
          <input
            type="text"
            id="name"
            required
            placeholder="Title"
            className="rounded p-2 border-b-2 border-slate-500 bg-slate-300 valid:border-green-400 shadow"
          />
        </div>
        <div className="flex flex-col text-lg w-1/5 uppercase">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            id="amount"
            required
            placeholder="Amount"
            className="rounded p-2 border-b-2 border-slate-500 bg-slate-300 valid:border-green-400 shadow"
          />
        </div>
        <div className="flex flex-col text-lg w-1/5 uppercase">
          <label htmlFor="date">date</label>
          <input
            type="date"
            id="date"
            required
            className="rounded p-2 border-b-2 border-slate-500 bg-slate-300 valid:border-green-400 shadow"
          />
        </div>
        <div className="grid gap-2 uppercase p-2 ">
          <label
            htmlFor="income"
            className="p-1 bg-green-400 rounded shadow text-white"
          >
            income
            <input
              type="radio"
              name="type"
              id="income"
              className="collapse	 checked:my-5"
            />
          </label>

          <label
            htmlFor="expense"
            className="p-1 bg-red-400 rounded shadow text-white"
          >
            expense
            <input
              type="radio"
              name="type"
              id="expense"
              className="collapse	 checked:my-5"
            />
          </label>
        </div>
        <button
          type="submit"
          className="px-10 py-3 bg-slate-700 text-white rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}
