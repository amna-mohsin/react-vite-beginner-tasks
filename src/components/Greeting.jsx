import React from "react";
import "./Greeting.css";

function Greeting({ name }) {
  return <p className="greeting">Hello, {name}! Welcome to React.</p>;
}

export default Greeting;
