import React from "react";
import useInput from "../Custom_Hooks/useInput";

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>FirstName : </label>
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <label>LastName : </label>
          <input {...bindLastName} type="text" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default UserForm;
