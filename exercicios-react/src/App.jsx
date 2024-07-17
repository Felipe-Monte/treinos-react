// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

import { useEffect, useState } from "react";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const TextConditional = ({ isValid, children }) => {
  const textStyle = {
    color: isValid ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <p>
      Situação: <span style={textStyle}>{children}</span>
    </p>
  );
};

const App = () => {
  const dados = luana;

  const [totalSpend, setTotalSpend] = useState(0);

  useEffect(() => {
    const calcTotalSpent = () => {
      const total = dados.compras.reduce((acumulador, compra) => {
        let price = Number(compra.preco.replace("R$", ""));

        return acumulador + price;
      }, 0);

      setTotalSpend(total);
    };

    calcTotalSpent();
  }, []);

  return (
    <div>
      <h2>Nome: {dados.cliente}</h2>
      <p>Idade: {dados.idade}</p>
      <TextConditional isValid={dados.ativa}>
        {dados.ativa ? "Ativo" : "Inativo"}
      </TextConditional>
      <p>Total gasto: R$: {totalSpend}</p>
      {totalSpend > 10000 && <p>"Você está gastando muito"</p>}
    </div>
  );
};

export default App;
