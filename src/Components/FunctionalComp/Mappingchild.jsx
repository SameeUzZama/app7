import React from "react";
import { Card } from "react-bootstrap";
const Mappingchild = ({ itemCurrent }) => {
  console.log(itemCurrent);
  return (
    <div style={{ float: "left", margin: "20px", alignContent: "center" }}>
      {/* <h1>this is Mappingchild component</h1> */}
      <Card style={{ width: "18rem", border: "20px solid blue" }}>
        <img src={itemCurrent.img} alt="ok" />
        <h2>{itemCurrent.title}</h2>
        <p>{itemCurrent.desc}</p>
      </Card>
    </div>
  );
};

export default Mappingchild;
