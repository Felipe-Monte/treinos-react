import React from "react";

const Product = ({ product }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (product === null) return;

    fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [product]);

  return (
    <div>
      <p>{data && data.nome}</p>
      <p>{data && data.preco}</p>
    </div>
  );
};

export default Product;
