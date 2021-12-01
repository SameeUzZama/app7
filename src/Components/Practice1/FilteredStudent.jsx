import React from "react";
import { filteredstud } from "../Practice1/Filteredstud";

const FilteredStudent = () => {
  const finaldetail = filteredstud;
  const output = finaldetail.data.filter(
    (elem) => elem.age > 24 && elem.gender === "male"
  );
  return (
    <div>
      <h2>to fileter student catogery</h2>
      {output.map((item) => {
        return (
          <div>
            <h2>name:{item.name}</h2>
            <h2>age: {item.age}</h2>
            <h2>gender:{item.gender}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default FilteredStudent;
