//export function Greeting(props) {
  //console.log(props);
export function Greeting({title, salary}) {  
  const message = "Hello World";
  const name = "Francisco";

  const married = true;

  const marriedMessage = "I'm married. 😀";
  if (!married) {
    marriedMessage = "I'm sigle.";
  }

  const user = {
    name: "Frank",
    lastName: "Perez",
  };

  return (
    <div>
      <h1>

        {message}: {name} --- {title} -- {salary}
      </h1>
      <p>{marriedMessage}</p>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
