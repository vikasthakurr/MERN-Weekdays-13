import React from "react";
import Card from "./Card";
import Skelton from "./Skelton";
import { useState, useEffect } from "react";
// import Product from "./Product";
// import { lazy } from "react";
import Product from "./Product";
import { Suspense } from "react";
// const Product = lazy(() => {
//   import Product from "./Product";
// });
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  return (
    <div>
      {loading ? <Skelton /> : <Card />}
      <Suspense fallback="we ca">
        <Product />
      </Suspense>
    </div>
  );
};

export default App;
