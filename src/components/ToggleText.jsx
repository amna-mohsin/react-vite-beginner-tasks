import React, { useState } from "react";
import "./ToggleText.css";

function ToggleText() {
  const [show, setShow] = useState(true);
  return (
    <div className="toggle-container">
      <button onClick={() => setShow(!show)}>Toggle Text</button>
      {show && <p>React is a JavaScript 
        library for building user interfaces, 
        while Vite (pronounced "veet") is a modern, 
        fast build tool and development server. 
        When used together, Vite provides the efficient 
        tooling infrastructure to develop and build React 
        applications at high speeds. </p>}
    </div>
  );
}

export default ToggleText;
