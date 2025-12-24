import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Exercise1 from './pages/Exercise1.js'
import Exercise2 from './pages/Exercise2.js';
import Exercise3 from './pages/Exercise3.js';
import Exercise4 from './pages/Exercise4.js';
import Exercise5 from './pages/Exercise5.js';
import BackPage from './components/BackPage.js';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Exercise1", element: <Exercise1 /> },
  { path: "/Exercise2", element: <Exercise2 /> },
  { path: "/Exercise3", element: <Exercise3 /> },
  { path: "/Exercise4", element: <Exercise4 /> },
  { path: "/Exercise5", element: <Exercise5 /> },
  { path: "/about", element: <div>About</div> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BackPage></BackPage>
    <RouterProvider router={router} />
  </React.StrictMode>
);
