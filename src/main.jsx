
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
import UsersDetails from './components/UsersDetails/UsersDetails';




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
        path : "/users",
        loader :() => fetch("https://jsonplaceholder.typicode.com/users"),
        element:  <Users></Users>
      },
      {
        path : '/user/:userId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UsersDetails></UsersDetails>
      }
    ]

  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
