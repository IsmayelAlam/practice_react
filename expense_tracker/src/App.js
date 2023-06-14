import AddExpense from "./Components/AddExpense";
import History from "./Components/History";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div>
      <SideBar />
      <History />
      <AddExpense />
    </div>
  );
}

export default App;
