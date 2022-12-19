import React from "react";
import ReactDOM from "react-dom/client";

import "../css/style.css";
import Header from "./Header";
import Body from "./Body";

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
