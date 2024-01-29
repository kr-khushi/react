import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUser = searchParams.get("name") === "khushi";

  return (
    <>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>

      <div>
        <button onClick={() => setSearchParams({ name: "khushi" })}>
          Active User
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>

      {showActiveUser ? (
        <h2>Showing khushi user</h2>
      ) : (
        <h2>Showing all user</h2>
      )}

      <Outlet />
    </>
  );
};

export default User;
