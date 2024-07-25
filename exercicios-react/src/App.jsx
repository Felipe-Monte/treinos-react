import React, { useEffect } from "react";
import Product from "./product";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [product, setProduct] = React.useState(localStorage.getItem("preference"));
  const [preference, setPreference] = React.useState(null);

  React.useEffect(() => {
    setPreference(product)
  }, [])

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
