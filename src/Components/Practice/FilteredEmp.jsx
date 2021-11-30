import React from "react";
import { filtered } from "./Filtered";

const FilteredEmp = () => {
  const finaldata = filtered;
  const output = finaldata.data.filter(
    (elem) => elem.age > 20 && elem.gender === "male"
  );

  return (
    <div>
      <h2>filtered data</h2>
      {output.map((item) => {
        return (
          <div>
            <h4>Name:{item.name}</h4>
            <h5>age:{item.age}</h5>
            <h6>gender:{item.gender}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default FilteredEmp;
