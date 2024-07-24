import React, { useEffect, useState } from "react";
import Product from "./product";

const App = () => {
  const [data, setData] = useState(null);
  const [preference, setPreference] = useState(localStorage.getItem("preference"));

  useEffect(() => {
    // Se houver uma preferência no localStorage, faça o fetch do produto correspondente
    if (preference) {
      fetchProduct(preference);
    }
  }, [preference]);

  const fetchProduct = async (productName) => {
    try {
      const fetchAPI = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${productName}`
      );
      const response = await fetchAPI.json();
      setData(response);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  };

  async function handleClick(event) {
    const productName = event.target.textContent;

    // Atualiza o estado da preferência e o localStorage
    setPreference(productName);
    localStorage.setItem("preference", productName);

    // Faz o fetch do produto selecionado
    fetchProduct(productName);
  }

  return (
    <div>
      <h1>
        Preferência: {data ? data.nome : (preference ? `${preference}` : 'Sem dados')}
      </h1>

      <button onClick={handleClick}>notebook</button>
      <button style={{ marginLeft: "20px" }} onClick={handleClick}>
        smartphone
      </button>

      {data && <Product data={data} />}
    </div>
  );
};

export default App;
