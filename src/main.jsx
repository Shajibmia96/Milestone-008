
import ReactDOM from 'react-dom/client'
import React from 'react';
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/Navbar/About'
import Contact from './components/Navbar/Contacts'
import Users from './components/Users/Users';




const router = createBrowserRouter([
  
  {
    path : '/',
    element : <Home></Home>,

    children :[
      {
        path : '/about',
        element: <About></About>
      },
      {
        path : '/contact',
        element: <Contact></Contact>
      },
      {
        path : '/users',
        element:<Users></Users>

      }
    ]

  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
