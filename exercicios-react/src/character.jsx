import React, { useState, useEffect } from "react";

const container = {
  border: "1px solid red",
  width: "100px",
  height: "100px",
  position: "absolute",
};

const Character = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        setPosition((prev) => ({ ...prev, top: Math.max(prev.top - 50, 0) }));
        break;
      case "ArrowDown":
        setPosition((prev) => ({ ...prev, top: prev.top + 50 }));
        break;
      case "ArrowLeft":
        setPosition((prev) => ({ ...prev, left: Math.max(prev.left - 50, 0) }));
        break;
      case "ArrowRight":
        setPosition((prev) => ({ ...prev, left: prev.left + 50 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{ ...container, top: `${position.top}px`, left: `${position.left}px` }}
    >
      mova
    </div>
  );
};

export default Character;
