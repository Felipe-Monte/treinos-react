import React from "react";

const App = () => {
  const [comments, setComments] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef()

  function handleClick() {
    setComments([...comments, input]);
    setInput("")
    inputElement.current.focus()
  }

  return (
    <div>
      <h1>Comentários</h1>
      <ul>
        {comments.map((comment) => {
          return <li key={comment}>{comment}</li>;
        })}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App;
