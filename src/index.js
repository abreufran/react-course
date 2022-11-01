import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { Greeting, UserCard } from "./Greeting";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const handleChange = (e) => {
  console.log(e.target.value);
};

root.render(
  <>
    <Greeting title="hola" salary={5} />
    <Greeting title="hola2" salary={10} />

    <UserCard
      name="Francisco Abreu"
      salary={10000}
      married={false}
      points={[9, 8.5, 10]}
      address={{ street: "San Francisco", department: 1504 }}
      greet={function () {
        alert("Hello");
      }}
    />

    <Button text="Click me" />
    <Button text="Pay" />
    <Button text="Go to" />

    <TaskCard ready={false} />

    <Saludar />

    <input
      id="inputId"
      onChange={function (e) {
        console.log(e.target.id);
        console.log(e.target.value);
        console.log("escribiendo en el input");
      }}
    />

    <input id="inputId2" onChange={handleChange} />

    <input
      id="inputId3"
      onDoubleClick={function (e) {
        console.log("Doble clic");
      }}
    />

    <form
      onSubmit={(e) => {
        e.preventDefault(); //Quita la redireccion por defecto.
        console.log("Enviando formulario.");
      }}
    >
      <h1>Registro de Usuario</h1>
      <button>Send</button>

      <Posts />
    </form>
  </>
);
