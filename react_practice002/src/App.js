import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUser(uName, uAge) {
    setUsersList((preUser) => [
      ...preUser,
      { name: uName, age: uAge, id: Math.random().toString() },
    ]);
  }

  return (
    <div>
      <AddUser noAddUser={addUser} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
