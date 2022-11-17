const heading = React.createElement("h1", {}, "This page uses React CDN");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
root.render(heading);
console.log(root);