import { useContext, useReducer } from "react";
import { nanoid } from "nanoid";
import Input from "../Input";
import expenseDataContext from "../context/expenseDataContext";

const ADD_TITLE = "add_title";
const ADD_AMOUNT = "add_amount";
const ADD_DATE = "add_date";
const ADD_TYPE = "add_type";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return { ...state, title: action.payload };
    case ADD_AMOUNT:
      return { ...state, amount: action.payload };
    case ADD_DATE:
      return { ...state, date: action.payload };
    case ADD_TYPE:
      return { ...state, type: action.payload };
    default:
      throw new Error("unknown action " + action.type);
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

  const { addExpenseLog } = useContext(expenseDataContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addExpenseLog(state);
    event.target.reset();
  };

  return (
    <form
      className="w-full flex gap-10 items-center px-10 col-start-2 col-end-6 border-t-2 bg-white z-10"
      onSubmit={handleSubmit}
    >
      <Input
        title="title"
        type="text"
        onChange={(event) =>
          dispatch({ type: ADD_TITLE, payload: event.target.value })
        }
      />
      <Input
        title="amount"
        type="number"
        onChange={(event) =>
          dispatch({ type: ADD_AMOUNT, payload: event.target.value })
        }
      />
      <Input
        title="date"
        type="date"
        onChange={(event) =>
          dispatch({ type: ADD_DATE, payload: event.target.value })
        }
      />

      <div className="flex flex-col">
        <Input
          type="radio"
          name="type"
          title="income"
          onChange={(event) =>
            dispatch({ type: ADD_TYPE, payload: event.target.id })
          }
        />
        <Input
          type="radio"
          name="type"
          title="expense"
          onChange={(event) =>
            dispatch({ type: ADD_TYPE, payload: event.target.id })
          }
        />
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