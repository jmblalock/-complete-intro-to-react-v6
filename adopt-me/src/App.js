import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Remy" animal="Dog" breed="Pyrenees" />
      <Pet name="Quincy" animal="Dog" breed="Terrier" />
      <Pet name="Sudo" animal="Cat" breed="Tom" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
