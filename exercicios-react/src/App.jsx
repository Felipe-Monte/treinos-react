import React from "react";

const App = () => {
  const [cart, setCart] = React.useState(0);
  const [message, setMessage] = React.useState(null);
  const timer = React.useRef();

  function handleClick() {
    setCart(cart + 1);
    setMessage(`Item adicionado ao carrinho`);

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setMessage("");
    }, 2000);
    console.log(timer.current);
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Adicionar {cart}</button>
    </div>
  );
};

export default App;
