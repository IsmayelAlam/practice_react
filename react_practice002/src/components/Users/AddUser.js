import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";
import { useState } from "react";

function AddUser(props) {
  const [enterUserName, setUserName] = useState("");
  const [enterUserAge, setUserAge] = useState("");
  const [errors, setErrors] = useState();

  function addUserHandler(event) {
    event.preventDefault();
    setUserAge("");
    setUserName("");
    if (!enterUserName || !enterUserAge || +enterUserAge < 0) {
      setErrors({
        title: "Invalid input",
        message: "please enter a valid name and age. (non-empty and age > 0)",
      });
      return;
    }
    props.noAddUser(enterUserName, enterUserAge);
  }

  function userNameChange(event) {
    setUserName(event.target.value);
  }
  function userAgeChange(event) {
    setUserAge(event.target.value);
  }

  function errorClose() {
    setErrors(null);
  }

  return (
    <div>
      {errors && (
        <ErrorModel
          title={errors.title}
          message={errors.message}
          onClose={errorClose}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={userNameChange}
            value={enterUserName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={userAgeChange}
            value={enterUserAge}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}
export default AddUser;
