import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './components/Search.jsx'
import Help from './components/Help.jsx'
import Offers from './components/Offers.jsx'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "search",
        element: <Search/>,
      },
      {
        path: "offer",
        element: < Offers />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "Login",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
