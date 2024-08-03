import React from "react";

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const App = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    zipCode: "",
    road: "",
    number: "",
    local: "",
    city: "",
    state: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input id="name" type="text" value={form.name} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={form.email}
        onChange={handleChange}
      />

      <button>Enviar</button>
    </form>
  );
};

export default App;
