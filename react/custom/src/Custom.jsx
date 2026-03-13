import React from "react";
import { useEffect, useState } from "react";

const Custom = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return [data];
};

export default Custom;
