import React from "react";

const Card1 = ({ fullname, salary }) => {
  console.log(fullname, salary);
  //   let fullname = "raju";
  return (
    <div>
      <h1>Name:{fullname}</h1>
      <p>salary:{salary}</p>
    </div>
  );
};

export default Card1;
