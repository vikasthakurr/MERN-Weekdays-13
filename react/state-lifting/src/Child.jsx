import React from "react";

const Child = (props) => {
    console.log(props);

  const handleChange = (e) => {
    // console.log(e.target.value);
    props.setName(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={props.name}
        placeholder="enter name"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Child;
