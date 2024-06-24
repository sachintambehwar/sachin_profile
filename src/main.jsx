import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Layout.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Skill from "./components/Skill.jsx";
import Work from "./components/Work.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: "#20b00af8",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#e54110",
            color: "#fff",
          },
        },
      }}
    />
  </React.StrictMode>
);
