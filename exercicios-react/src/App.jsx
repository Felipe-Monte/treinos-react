import React from "react";
import Product from "./product";

import { GlobalStorage } from "./GlobalContext";
import Clear from "./clear";

const App = () => {
  return (
    <GlobalStorage>
      <Product />
      <Clear/>
    </GlobalStorage>
  );
};

export default App;
