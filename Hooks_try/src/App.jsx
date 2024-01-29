import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const handleSubmit = async () => {
    // if (userName.length === 0) {
    //   alert("Enter UserName First");
    //   return;
    // }
    try {
      const res = await axios.get(`https://api.github.com/users/${userName}`);
      console.log(res.data);
      setUserDetails(res.data);
      setUserName("");
      setIsLoading(false);
      setIsTyping(false);
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data.message);
      setUserName("");
      setIsLoading(true);
      setIsTyping(true);
    }
  };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">Welcome to the Data Fetching App</h1>
        <input
          type="text"
          placeholder="Enter Your github User Name"
          value={userName}
          onChange={(e) => {
            setIsTyping(true);
            setIsLoading(true);
            setUserName(e.target.value);
          }}
        />
        <button onClick={async () => await handleSubmit(userName)}>
          Submit
        </button>

        {isLoading && isTyping ? (
          <h2>Loading...</h2>
        ) : userDetails ? (
          <div className="user-card">
            <h2>{userDetails.login}</h2>
            <img src={userDetails.avatar_url} alt="User Avatar" />
            <p>Followers: {userDetails.followers}</p>
            <p>Public Repositories: {userDetails.public_repos}</p>
            <p>Account Created at: {userDetails.created_at}</p>
          </div>
        ) : (
          alert("Error while fetchig data")
        )}
      </div>
    </>
  );
};

export default App;
