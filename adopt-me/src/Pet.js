import React from "react";

// const Pet = (props) => {
//   return React.createElement("div", { id: "blah" }, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

const Pet = (props) => {
  return (
    <div id="blah">
      <h2>{props.name}</h2>
      <h3>{props.animal}</h3>
      <h3>{props.breed}</h3>
    </div>
  );
};

export default Pet;
