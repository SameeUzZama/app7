import React, { useState } from "react";

const Conhandler = () => {
  const [ducati, setDucati] = useState(true);

  const handleToggle = () => {
    setDucati(!ducati);
    console.log(ducati);
  };
  return (
    <div>
      {ducati ? (
        <div>
          <h1>Samee</h1>
        </div>
      ) : (
        <div>
          <h1>UzZama</h1>
        </div>
      )}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};
export default Conhandler;
