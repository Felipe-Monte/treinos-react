import React from "react";
import RenderItem from "./render-item";

const App = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = (endpoint) => {
    setLoading(true);

    setTimeout(() => {
      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setLoading(false);
        });
    }, 2000);

  };

  return (
    <div>
      <button
        onClick={() =>
          fetchData("https://ranekapi.origamid.dev/json/api/produto/tablet")
        }
      >
        Tablet
      </button>
      <button
        onClick={() =>
          fetchData("https://ranekapi.origamid.dev/json/api/produto/smartphone")
        }
      >
        Smartphone
      </button>
      <button
        onClick={() =>
          fetchData("https://ranekapi.origamid.dev/json/api/produto/notebook")
        }
      >
        Notebook
      </button>

      {loading && <p>Carregando...</p>}
      {!loading && data && (
        <RenderItem
          name={data.nome}
          price={data.preco}
          user={data.usuario_id}
          sold={data.vendido}
        />
      )}
    </div>
  );
};

export default App;
