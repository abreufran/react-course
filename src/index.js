import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Greeting() {
  return (
    <div>
      <h1>Componenete 1</h1>
      <p>Parrafo 1</p>
    </div>
  );
}
root.render(
  <div>
    <Greeting></Greeting>
    <Greeting></Greeting>
  </div>
);
