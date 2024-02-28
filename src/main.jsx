import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from "./routes/view/home";
import ErrorPage from "./error-page";
import './i18n';

const router = createBrowserRouter([
  {
    path: "/",
    // production
    element: <Home />,
    errorElement: <ErrorPage />,
  }, 
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
