import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { Greeting, UserCard } from "./Greeting";
import { TaskCard } from "./Task";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

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
  </>
);
