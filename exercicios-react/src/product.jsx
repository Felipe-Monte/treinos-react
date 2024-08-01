import React from "react";
import { GlobalContext } from "./GlobalContext";

const Product = () => {
  const { data } = React.useContext(GlobalContext);

  if (data === null) return;

  return (
    <div>
      <p>Produtos:</p>
      {data.map((product) => (
        <li key={product.id}>{product.nome}</li>
      ))}
    </div>
  );
};

export default Product;
