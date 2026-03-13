/* eslint-disable react-refresh/only-export-components */
// Notes about useLayoutEffect in React
// useLayoutEffect is similar to useEffect, but fires after all DOM mutations.
// This is useful for measuring the size of an element after it has been rendered.
// It also fires after DOM mutations caused by the browser, such as when the user resizes the window.
import React, { useState, useLayoutEffect } from "react";

const UseLayoutEffectExample = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateSize = () => {
      const element = document.getElementById("my-element");
      const { width, height } = element.getBoundingClientRect();
      setSize({ width, height });
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div id="my-element">
      <p>
        width: {size.width}, height: {size.height}
      </p>
    </div>
  );
};

// Notes about the code:
// We use the `useState` hook to store the size of the element.
// The `useLayoutEffect` hook is used to measure the size of the element after it has been rendered.
// The `updateSize` function is called whenever the window is resized.
// The `updateSize` function also gets called once when the component is mounted.
// We use the `window.removeEventListener` method to clean up the event listener when the component is unmounted.
