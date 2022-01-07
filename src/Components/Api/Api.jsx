import React, { useState, useEffect } from "react";
import axios from "axios";
const API = () => {
  const [resData, setResData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setResData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // const baseURL = "https://jsonplaceholder.typicode.com/posts";
  // fetch(baseURL)
  //   .then((res) => res.json())
  //   .then((out) => setResData([...out]))
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return (
    <div>
      {resData.map((elem) => (
        <h1 key={elem.id}>{elem.title}</h1>
      ))}
    </div>
  );
};

export default API;
