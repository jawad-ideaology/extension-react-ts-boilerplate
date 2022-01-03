import React from "react";
import ReactDOM from "react-dom";
import { Testing } from "../components/Testing";

// const App = <img src="ext.png" />;

const root = document.createElement("div");
document.body.appendChild(root);

const People = () => {
  return <div>PopUp</div>;
};

function App() {
  return (
    <div>
      <h3>Hello world</h3>
      <People />
      <Testing />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
