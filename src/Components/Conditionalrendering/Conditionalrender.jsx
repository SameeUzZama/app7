import React, { useState } from "react";

const Conditionalrender = () => {
  const [show, setShow] = useState(true);

  const handleToggle = () => {
    setShow(!show);
    console.log(show);
  };
  //there are two method to use conditionalrendering 1 is handle and the 2 is use with arrow function with fad arrow
  return (
    <div>
      {show ? (
        <div>
          <h1>Div One</h1>
        </div>
      ) : (
        <div>
          <h1>Div Two</h1>
        </div>
      )}
      <button onClick={handleToggle}>Toggle</button>
      {/* <button onClick={() => setShow(!show)}>Toggle</button> */}
    </div>
  );
};

export default Conditionalrender;

//for use to hide and show we can use "null"
//   return (
//     <div>
//       {show ? (
//         <div>
//           <h1>Div One</h1>
//         </div>
//       ) : null}
//       {/* <button onClick={handleToggle}>Toggle</button> */}
//       <button onClick={() => setShow(!show)}>Toggle</button>
//     </div>
//   );
// };

// export default Conditionalrender;
