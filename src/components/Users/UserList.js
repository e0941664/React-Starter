import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  if (props.users.length === 0) {
    return <div></div>;
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} years old.
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;