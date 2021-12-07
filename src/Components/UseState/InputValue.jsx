import React, { useState } from "react";

const Inputvalue = () => {
  const [details, setDetails] = useState({ name: "", age: "", message: "" });
  // const [name, setName] = useState();
  // const [age, setAge] = useState("");
  // const [message, setMessage] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="age"
        onChange={(e) => setDetails({ ...details, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="message"
        onChange={(e) => setDetails({ ...details, message: e.target.value })}
      />
      <br />
      <h2>Name: {details.name}</h2>
      <h2>age: {details.age}</h2>
      <h2>message: {details.message}</h2>
      <h2>object:{JSON.stringify(details)} </h2>
    </div>
  );
};

export default Inputvalue;
