import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>the value coming from child is :{name}</h1>
      <Child setName={setName} name={name} />
    </div>
  );
};

export default App;
