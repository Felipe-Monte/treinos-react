import React from "react";

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
  const [errorMessage, setErrorMessage] = React.useState("");

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(form);

    try {
      const response = await fetch(
        "https://ranekapi.origamid.dev/json/api/usuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json(); // Extrair a resposta JSON

      console.log(response);

      if (response.ok) {
        console.log("Dados cadastrados com sucesso!", data);
        setErrorMessage("");
      } else {
        setErrorMessage(data.message || "Ocorreu um erro"); // Usar a mensagem de erro da API
      }
    } catch (error) {
      console.error("Erro na requisição", error);
      setErrorMessage("Erro ao conectar com servidor");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={form.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Senha</label>
      <input
        id="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <label htmlFor="zipCode">Cep</label>
      <input
        id="zipCode"
        type="number"
        value={form.zipCode}
        onChange={handleChange}
        required
      />

      <label htmlFor="road">Rua</label>
      <input
        id="road"
        type="text"
        value={form.road}
        onChange={handleChange}
        required
      />

      <label htmlFor="number">Numero</label>
      <input
        id="number"
        type="number"
        value={form.number}
        onChange={handleChange}
        required
      />

      <label htmlFor="local">Bairro</label>
      <input
        id="local"
        type="text"
        value={form.local}
        onChange={handleChange}
        required
      />

      <label htmlFor="city">Cidade</label>
      <input
        id="city"
        type="text"
        value={form.city}
        onChange={handleChange}
        required
      />

      <label htmlFor="state">Estado</label>
      <input
        id="state"
        type="text"
        value={form.state}
        onChange={handleChange}
        required
      />

      {errorMessage && <p>{errorMessage}</p>}

      <button>Enviar</button>
    </form>
  );
};

export default App;
