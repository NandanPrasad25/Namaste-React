import React from "react";
import ReactDOM from "react-dom/client";

//React Element ( Javascript Object )
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

//React Component
const Title = () => <h1>Namaste React</h1>;

//Component composition
const HeadingComponent = () => (
  <>
    <Title />
    {heading}
    <h3>{console.log("sdshkdhk")}</h3>
    <h2>Best tutorial</h2>
  </>
);

//React JSX => React.createElement(React Element/ Object) => Browser HTML Element
//      Babel                  ReactDOM.render()

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
console.log(heading);
console.log(root);
console.log(React);
