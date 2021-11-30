import React from "react";
import { empData } from "./EmpData";

const MappingPractice = () => {
  return (
    <div>
      <h1>this is practice component</h1>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "200px" }}>
        {empData.map((data) => {
          return (
            <div>
              <img src={data.image} alt="" width="300px" height="300px" />
              <h2>name:{data.name}</h2>
              <h2>age:{data.age}</h2>
              <h2>contact:{data.contact}</h2>
              <h2>address:{data.address}</h2>
              <h2>cname:{data.cname}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MappingPractice;
