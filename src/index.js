import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./Greeting";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Greeting title="hola" salary={5} />
    <Greeting title="hola2" salary={10} />
  </>
);
