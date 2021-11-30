import React from "react";
import Mappingchild from "./Mappingchild";
import { data } from "./CardReducer";

const MappingParent = () => {
  return (
    <div>
      <h1>this is MappingParent component</h1>
      {data.userData.map((itemCurrent, index) => {
        return <Mappingchild itemCurrent={itemCurrent} key={index} />;
      })}
    </div>
  );
};

export default MappingParent;
