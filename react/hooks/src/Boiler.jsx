import React, { useState } from "react";

const Useref = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h1>value of count is :{count}</h1>
      <button onClick={handleClick}>Increse</button>
    </div>
  );
};

export default Useref;
