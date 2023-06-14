import AddExpense from "./Components/AddExpense";
import History from "./Components/History";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="bg-slate-500 h-screen w-screen grid grid-cols-5 grid-rows-5 auto-cols-max auto-rows-auto">
      <SideBar />
      <History />
      <AddExpense />
    </div>
  );
}

export default App;
