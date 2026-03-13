import React, { useState } from "react";

const Usestate = () => {
  // useState Hook
  // Definition:
  // useState is a React Hook that lets you add state to a function component.
  // It returns [stateValue, setStateValue].
  //
  // Notes / Caviats:
  // 1) Calling the setter schedules a re-render with the new state.
  // 2) State updates are async and may be batched.
  // 3) Never mutate state directly; always use the setter.
  // 4) When next state depends on previous state, use functional updates.
  // 5) Initial state is used only on first render (unless lazy init).
  //
  // Example: simple counter using useState
  const [count, setCount] = useState(0);

  return (
    <section style={{ padding: "16px", lineHeight: 1.6 }}>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
};

export default Usestate;
