import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorModal, setErrorModal] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if(username.trim().length === 0 || age.trim().length === 0)
    {
      setErrorModal({title: "Invalid Inputs", message: "Please enter Username and Age!"});
      return;
    }

    if(+age < 1 )
    {
      setErrorModal({title: "Invalid age", message: "Age should be > 0"});
      return;
    }

    if (username.trim().length > 0 && +age.trim() > 0) {
      props.onAddUser(username, age);
      setUsername("");
      setAge("");
    }
  };

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const closeErrorModalHandler = () => {
    setErrorModal(null);

  }

  return (
    <div>
     {errorModal && <ErrorModal title={errorModal.title} message={errorModal.message} onConfirm={closeErrorModalHandler}/> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={changeUsernameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            placeholder="Enter user age"
            value={age}
            onChange={changeAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
