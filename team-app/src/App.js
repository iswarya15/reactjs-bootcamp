import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./style.css";
import Header from "./components/header/Header";
import ErrorComponent from "./components/error/ErrorMessage";
import Profile from "./components/profile/Profile";
import Body from "./components/body/Body";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/search",
        element: <Body />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
