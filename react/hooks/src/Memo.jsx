import React from "react";
import { useState, useMemo, useCallback } from "react";
import Child from "./component/Child";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  function sum() {
    console.log("heavy function called");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum = sum + i;
    }
    return sum;
  }
  let res = useMemo(() => sum(), []);

  function handleClick2() {
    setCount2(count2 + 1);
  }
  function sayHi() {
    console.log("hi");
  }

  let sayHi1 = useCallback(() => sayHi, []);
  // let fn = sayHi();
  return (
    <div>
      <h1>the value of sum is:{res}</h1>
      <h1>value of count is :{count}</h1>
      <button onClick={handleClick}>Increse1</button>

      <br />

      <button onClick={handleClick2}>Increase2</button>
      <h1>Count of child:{count2}</h1>
      <Child sayHi={sayHi1} />
    </div>
  );
};

export default Memo;
