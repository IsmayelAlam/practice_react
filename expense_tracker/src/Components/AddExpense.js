export default function AddExpense() {
  return (
    <div className="col-start-2 col-end-6 flex items-center">
      <form className="w-full flex gap-10 items-end px-10">
        <div className="flex flex-col text-lg w-1/5 uppercase">
          <label htmlFor="name">description</label>
          <input
            type="text"
            id="name"
            required
            className="rounded p-2 border-b-2 border-slate-500 bg-slate-300 valid:border-green-400 shadow"
          />
        </div>
        <div className="flex flex-col text-lg w-1/5 uppercase">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            id="amount"
            required
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
