import AddExpense from "./Components/layout/AddExpense";
import History from "./Components/History";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="h-screen w-screen grid grid-cols-5 grid-rows-5 overflow-hidden">
      <SideBar />
      <AddExpense />
      <History />
    </div>
  );
}

export default App;
