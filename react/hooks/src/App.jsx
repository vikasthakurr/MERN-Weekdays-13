import React from "react";
// import { useLayoutEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  // console.log("api called");
  // let btn = document.getElementById("btn");
  // console.log(btn);
  // btn.addEventListener("click", () => {
  //   console.log("btn clicked");
  // });
  // let a = 5;
  const [count, setCount] = useState(0);
  let value = 0;

  // useLayoutEffect(() => {
  //   console.log("component mount");
  //   return () => console.log("coomponetn removed");
  // }, [count]);
  function handleClick() {
    // a = a - 1;
    // console.log(a);
    setCount(count + 1);
    // value = value + 1;
    console.log(value);
  }
  return (
    <div>
      <h1>value of count is :{count}</h1>
      <button onClick={handleClick}>decrement</button>
    </div>
  );
};

export default App;
