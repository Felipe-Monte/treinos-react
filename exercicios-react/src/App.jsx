import React from "react";
import Product from "./product";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [data, setData] = React.useState(null);

  async function handleClick(event) {
    let endopoint = event.target.textContent;

    const fechAPI = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${endopoint}`
    );
    const response = await fechAPI.json();
    setData(response);
  }

  return (
    <div>
      <h1>Preferência: {data && data.nome}</h1>

      <button onClick={() => handleClick(event)}>notebook</button>
      <button onClick={() => handleClick(event)} style={{ marginLeft: "20px" }}>
        smartphone
      </button>

      {data && <Product data={data} />}
    </div>
  );
};

export default App;
