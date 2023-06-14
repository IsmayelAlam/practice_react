export default function AddExpense() {
  return (
    <div className="col-start-2 col-end-6 flex items-center border-t-2 bg-white ">
      <form className="w-full flex gap-10 items-end px-10">
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
        <div className="grid grid-cols-2 gap-2 uppercase p-2 ">
          <label htmlFor="income" className="p-2 bg-green-400 ">
            income
          </label>
          <input
            type="radio"
            name="type"
            id="income"
            className="hidden checked:bg-black"
          />

          <label htmlFor="expense" className="p-2 bg-red-400">
            expense
          </label>
          <input type="radio" name="type" id="expense" className="hidden" />
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
