import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Back from './Back.jsx'
import './index.css'
import App from './App.jsx'
import Cards from './Cards.jsx'
import CardDisplay from './incohearant/incohearant.jsx';
import InBack from './incohearant/inBack.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Cards />,
      },
      {
        path: "back",
        element: <Back />,
      },
      {
        path: "incohearant",
        element: <CardDisplay />,
      },
      {
        path: "incohearant-back",
        element: <InBack />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
