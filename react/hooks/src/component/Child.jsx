// import React from "react";

// const Child = React.memo(() => {
//   console.log("child component rendered");
//   return <div>Child</div>;
// });

// export default Child;

import React from "react";
import { memo } from "react";

const Child = () => {
  console.log("child renderded");
//   console.log(props);
  return <div>Child</div>;
};

export default memo(Child);
