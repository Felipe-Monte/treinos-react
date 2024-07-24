import React from "react";

const RenderItem = ({ data }) => {
  return (
    <div>
      <h2>{data.nome}</h2>
      <p>R$: {data.preco}</p>
      <img src={data.fotos[0].src} alt={data.nome} />
    </div>
  );
};

export default RenderItem;
