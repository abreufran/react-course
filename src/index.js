import React, { useState, useEffect } from "react";
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

function Counter() {
  const [counter, setCounter] = useState(10);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Sumar</button>
    </div>
  );
}

function InputCounter() {
  const [mensaje, setMensaje] = useState("");

  const [inputCounter, setInputCounter] = useState(0);

  //Cuando el useEffect tiene como segundo parametro un array vacio se ejecuta una vez
  //Cuando no tienen segundo parámetro se ejecuta siempre
  //Cuando dentro del arreglo esta una variable se ejecuta cada vez que cambia la variable.
  useEffect(
    function () {
      console.log("render");
    },
    [inputCounter]
  );

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={(e) => alert("El mensaje es: " + mensaje)}>Save</button>

      <hr />
      <h1>Counter: {inputCounter}</h1>
      <button onClick={() => setInputCounter(inputCounter + 1)}>
        Incrementar
      </button>

      <Counter />
    </div>
  );
}

const users = [
  {
    id: 1,
    name: "Ryan ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/user2",
  },
];

root.render(
  <>
    <InputCounter />

    {users.map((u, i) => {
      return <h1 key={i}>{u.name}</h1>;
    })}

    {users.map((u, i) => {
      return (
        <div key={i}>
          <h1>{u.name}</h1>
          <img src={u.image} />
        </div>
      );
    })}

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
