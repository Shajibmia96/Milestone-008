
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
import Posts from './components/Posts/Posts';
import PostsDetails from './components/PostsDetails/PostsDetails';
import FountErrors from './components/FountError/FountErrors';





const router = createBrowserRouter([
  
  {
    path : '/',
    element : <Home></Home>,
    errorElement: <FountErrors></FountErrors>,

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
      },
      {
        path : '/posts',
        loader : () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element :<Posts></Posts>
      },
      {
        path :'/post/:postId',
        loader : ({params}) => fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostsDetails></PostsDetails>
      }
    ]

  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
