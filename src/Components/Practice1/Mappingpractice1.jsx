import React from "react";
import { data } from "../Practice1/StudentData";

export const Mappingpractice1 = () => {
  return (
    <div>
      <h2>this is practice of mapping</h2>
      <div>
        {data.map((data) => {
          return (
            <div>
              <img src={data.image} alt="" width="300px" height="300px" />
              <h2>name: {data.name}</h2>
              <h2>rollnum: {data.rollnum}</h2>
              <h2>contact: {data.contact}</h2>
              <h2>address: {data.address}</h2>
              <h2>cname:{data.cname}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mappingpractice1;
