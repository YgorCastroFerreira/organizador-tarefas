import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'
import "./sass/global.scss";
import Home from './view/home/Home.jsx';
import Delete from './view/delete/Delete.jsx'
import Edit from './view/edit/Edit.jsx'
import { LISTA_MOCK } from "./mock/lista.mock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home lista = {LISTA_MOCK}/>,
  },
  {
    path: "/delete",
    element: <Delete/>,
  },
  {
    path: "/edit",
    element: <Edit/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
