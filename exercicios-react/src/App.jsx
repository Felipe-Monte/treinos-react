import React from "react";
import Product from "./product";

import { GlobalStorage } from "./GlobalContext";

const App = () => {
  return (
    <GlobalStorage>
      <Product />
    </GlobalStorage>
  );
};

export default App;
