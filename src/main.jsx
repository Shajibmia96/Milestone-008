
import ReactDOM from 'react-dom/client'
import React from 'react';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/Navbar/About'
import Contact from './components/Navbar/Contacts'




const router = createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,

    children :[
      {
        path: "/about",
        element : <About></About>
      },

      {
        path : "/contact",
        element:<Contact></Contact>

      }
    ]
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
