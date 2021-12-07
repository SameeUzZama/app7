import React, { useState } from "react";
// import axios from "axios";
const Api = () => {
  const [resData, setResData] = useState([]);
  console.log("resData", setResData);
  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  fetch(baseURL)
    .then((res) => res.json())
    .then((out) => setResData([...out]))
    .catch((error) => {
      console.log(error);
    });
  return (
    <div>
      <h1>Fetching API</h1>
      <div>
        <h2>Title : </h2>
        <p>Body : </p>
      </div>
    </div>
  );
};

export default Api;
