import React, { useState } from "react";
import "./LiveInput.css";

function LiveInput() {
  const [text, setText] = useState("");
  return (
    <div className="liveinput-container">
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default LiveInput;
