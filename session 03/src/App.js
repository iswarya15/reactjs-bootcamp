import React from "react";
import ReactDOM from "react-dom/client";
import ReactLogo from "./assets/react-logo.png";
import UserIcon from "./assets/user.png";

const headerUsingCreateElement = React.createElement(
  "div",
  { className: "title" },
  [
    React.createElement("h1", {}, "Header using React.CreateElement"),
    React.createElement("h2", {}, "React BootCamp"),
    React.createElement("h3", {}, "In 3 months"),
  ]
);

var course = "React BootCamp";

const headerUsingJSX = (
  <div className="title">
    <h1>Header using JSX</h1>
    <h2>{course}</h2>
    <h3>In 3 months</h3>
  </div>
);

const TitleComponent = () => <h1>Title Component</h1>;

const HeaderUsingFuncComponent = () => {
  return (
    <div className="title">
      <TitleComponent />
      <h2>{course}</h2>
      <h3>In 3 months</h3>
    </div>
  );
};

// {TitleComponent} => Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.

// {<TitleComponent>} & {<TitleComponent></TitleComponent>} renders the component

console.log("Header using JSX => ", headerUsingJSX);
console.log("Header using FuncComponent => ", HeaderUsingFuncComponent());

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input placeholder="Enter keyword here" />
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <img src={ReactLogo} width="60px" height="60px" />
      <SearchBar />
      <img src={UserIcon} width="60px" height="60px" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
