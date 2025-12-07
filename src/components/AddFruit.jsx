import React, { useState } from "react";
import "./AddFruit.css";

function AddFruit() {
  const [fruits, setFruits] = useState(["Mango", "Banana"]);
  const [input, setInput] = useState("");

  const addFruit = () => {
    if (input.trim() !== "") setFruits([...fruits, input]);
    setInput("");
  };

  return (
    <div className="addfruit-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add fruit"
      />
      <button onClick={addFruit}>Add</button>
      <ul>
        {fruits.map((fruit, idx) => (
          <li key={idx}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddFruit;
