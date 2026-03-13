import React, { useLayoutEffect } from "react";

import { useRef, useState } from "react";
import Useref from "./Boiler";
const Ref = () => {
  const [count, setCount] = useState(0);
  let ref = useRef();
  let ref1 = useRef();
  const handleClick = () => {
    setCount(count + 1);
    // console.log(count);
    // ref.current = ref.current + 1;
    // console.log(ref.current);
  };

  // console.log(ref)
  // ;
  useLayoutEffect(() => {
    ref.current.style.backgroundColor = "red";
    ref.current.style.color = "yellow";
    ref1.current.style.backgroundColor = "green";
  });
  return (
    <div>
      <h1 ref={ref}>count:{count}</h1>
      {/* {(ref.current.style.color = "yellow")} */}
      {/* {(ref.current.style.backgroundColor = "red")} */}
      <button ref={ref1} onClick={handleClick}>
        increse
      </button>
      {/* {(ref1.current.style.backgroundColor = "green")} */}
    </div>
  );
};

export default Ref;
