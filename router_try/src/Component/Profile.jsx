import React, { useHistory } from "react";

const Profile = () => {
  const history = useHistory();
  console.log("history", history);

  return (
    <>
      <h1>Profile Page</h1>
      <button onClick={() => history(goBack)}>Go Back</button>
    </>
  );
};

export default Profile;
