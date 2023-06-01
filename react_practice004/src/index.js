import React from "react";
import ReactDOM from "react-dom/client";

const Element = document.getElementById("root");

const root = ReactDOM.createRoot(Element);

function App() {
  return <h1>{new Date().toLocaleTimeString()}</h1>;
}

root.render(<App />);
