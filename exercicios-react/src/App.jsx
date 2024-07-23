import React from "react";
import RenderItem from "./render-item";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [data, setData] = React.useState([]);

  const getTablet = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  return (
    <div>
      <RenderItem
        name={data.nome}
        price={data.preco}
        user={data.usuario_id}
        sold={data.vendido}
      />

      <button
        onClick={() =>
          getTablet("https://ranekapi.origamid.dev/json/api/produto/tablet")
        }
      >
        Tablet
      </button>
      <button
        onClick={() =>
          getTablet("https://ranekapi.origamid.dev/json/api/produto/smartphone")
        }
      >
        Smartphone
      </button>
      <button
        onClick={() =>
          getTablet("https://ranekapi.origamid.dev/json/api/produto/notebook")
        }
      >
        Notebook
      </button>
    </div>
  );
};

export default App;
