import React, { useState } from "react";

const StateWithMap = () => {
  const [generate, setGenerate] = useState([]);
  const handleGeneration = () => {
    setGenerate([
      ...generate,
      {
        id: generate.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <h1>Use State With Map</h1>
      <button onClick={handleGeneration}>Generate</button>
      <br />
      <br />
      {generate.map((elem, id) => {
        return (
          <li key={id}>
            {""}
            NUmber: {elem.value}, ID: {id}
            {""}
          </li>
        );
      })}
    </div>
  );
};

export default StateWithMap;
