import React from "react";
import "./FruitList.css";

function FruitList() {
  const fruits = ["Mango", "Banana", "Apple", "Orange", "Grapes"];
  return (
    <ul className="fruit-list">
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitList;
