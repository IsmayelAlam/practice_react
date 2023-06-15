import { useReducer } from "react";
import { nanoid } from "nanoid";
import Input from "./Input";

const ADD_TITLE = "add_title";
const ADD_AMOUNT = "add_amount";
const ADD_DATE = "add_date";
const ADD_TYPE = "add_type";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TITLE:
      state.title = action.payload;
      return;
    case ADD_AMOUNT:
      state.title = action.payload;
      return;
    case ADD_DATE:
      state.title = action.payload;
      return;
    case ADD_TYPE:
      state.title = action.payload;
      return;
    default:
      console.log(state);
  }
};

export default function AddExpense() {
  const [state, dispatch] = useReducer(reducer, {
    id: nanoid(),
    title: "",
    date: "",
    amount: "",
    type: "",
  });

  console.log(state);
  return (
    <form className="w-full flex gap-10 items-center px-10 col-start-2 col-end-6 border-t-2 bg-white">
      <Input title="title" type="text" />
      <Input title="amount" type="number" />
      <Input title="date" type="date" />

      <div className="flex flex-col">
        <Input type="radio" name="type" title="income" />
        <Input type="radio" name="type" title="expense" />
      </div>

      <button
        type="submit"
        className="px-10 py-3 bg-slate-700 text-white rounded"
      >
        Add
      </button>
    </form>
  );
}
