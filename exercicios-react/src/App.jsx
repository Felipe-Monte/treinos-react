import React, { useEffect } from "react";
import Product from "./product";

const App = () => {
  const [product, setProduct] = React.useState(
    localStorage.getItem("preference")
  );
  const [preference, setPreference] = React.useState(null);

  React.useEffect(() => {
    setPreference(product);
  }, []);

  function handleClick({ target }) {
    let productName = target.textContent;

    setProduct(productName);
    localStorage.setItem("preference", productName);
    setPreference(productName);
  }

  return (
    <div>
      <h1>Preferência: {preference && preference}</h1>

      <button onClick={handleClick}>notebook</button>
      <button style={{ marginLeft: "20px" }} onClick={handleClick}>
        smartphone
      </button>

      <Product product={product} />
    </div>
  );
};

export default App;
