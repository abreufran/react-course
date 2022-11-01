import "./task.css";

export function TaskCard({ ready }) {
  const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };
  const titleStyles = { fontWeight: "bold" };

  return (
    <>
      <div style={cardStyles}>
        <h1 style={titleStyles}>Mi tarea</h1>
        <p>Realizada</p>
      </div>
      <div className={ready ? "bg-red" : "bg-green"}>
        <h1 style={titleStyles}>Mi tarea</h1>
        <p>Realizada</p>
      </div>

      <div>
        <h1 style={titleStyles}>Mi 3era tarea</h1>
        <span style={ready ? { background: "green" } : { background: "red" }}>
          {ready ? "Tarea realizada" : "Tarea pendiente"}
        </span>
      </div>
    </>
  );
}
