import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Exercise1 from './pages/Exercise1.js'
import Exercise2 from './pages/Exercise2.js';
import Exercise3 from './pages/Exercise3.js';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Exercise1", element: <Exercise1 /> },
  { path: "/Exercise2", element: <Exercise2 /> },
  { path: "/Exercise3", element: <Exercise3 /> },
  { path: "/about", element: <div>About</div> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
