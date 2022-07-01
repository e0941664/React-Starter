import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addnewUserHandler = (username, userage) => {
    setUserList((preUserList) => {
      return [
        ...preUserList,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addnewUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
