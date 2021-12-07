import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>this is a react counter</h1>
      <button onClick={() => count < 0 && setCount(count - 1)}>
        Decrement
      </button>
      <p>Curent Count:{count}</p>
      <button onClick={() => count > 10 && setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
export default Counter;
