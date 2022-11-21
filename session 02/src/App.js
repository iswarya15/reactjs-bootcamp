import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement(
    "h1", { className: 'header' }, 'Starting React app with Parcel'
);

const p = React.createElement("p", {}, 'This page does not use create-react-app')

const container = React.createElement("div", { className: 'container' }, header, p)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
