import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const userId = params.userId;
  return (
    <>
      <h5>Details about user {userId}</h5>
    </>
  );
};

export default UserDetail;
