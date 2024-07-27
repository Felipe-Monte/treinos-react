import React, { useEffect, useState } from "react";

const container = {
  border: "4px solid blue",
  width: "100px",
  height: "100px",
  background: "blue",
  position: "absolute",
  top: 0,
  left: 0,
};

const Character = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [ speed, setSpeed ] = useState(100)

  function handleKeyDown({ key }) {
    setPosition((prevPosition) => {
      switch (key) {
        case "ArrowDown":
          return { ...prevPosition, top: prevPosition.top + speed };
        case "ArrowUp":
          return { ...prevPosition, top: prevPosition.top - speed };
        case "ArrowRight":
          return { ...prevPosition, left: prevPosition.left + speed };
        case "ArrowLeft":
          return { ...prevPosition, left: prevPosition.left - speed };
        default:
          return prevPosition;
      }
    });
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        ...container,
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    ></div>
  );
};

export default Character;
