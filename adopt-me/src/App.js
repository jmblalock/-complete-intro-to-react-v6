const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Remy",
      animal: "Dog",
      breed: "Pyrenees",
    }),
    React.createElement(Pet, {
      name: "Quincy",
      animal: "Dog",
      breed: "Terrier",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Cat",
      breed: "Tabby",
    }),
  ]);
};

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("root")
);
