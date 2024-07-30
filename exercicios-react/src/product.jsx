import React from "react";
import { GlobalContext } from "./GlobalContext";

const Product = () => {
  const data = React.useContext(GlobalContext);

  return (
    <div>
      produtos {data.count} <button onClick={() => data.addTen()}>adicionar</button>
    </div>
  );
};

export default Product;
