import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./compunents/Home/Home.jsx";
import About from "./compunents/About/About.jsx";
import Contact from "./compunents/Contact/Contact.jsx";
import Header from "./compunents/Header/Header.jsx";
import User from "./compunents/User/User.jsx";
import UserDetails from "./compunents/UserDetails/UserDetails.jsx";
import Posts from "./compunents/Posts/Posts.jsx";
import PostDetails from "./compunents/PostDetails/PostDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
      hydrateFallbackElement: <p>Loading...</p>,
    children : [
      {
        path:'/header',
        element:<Header></Header>
      },
      {
        path:'/about',
        element :<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>,
      },
      {
        path:'/user',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>,
      },
      {
        path:'/users/:usersId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        element :<UserDetails></UserDetails>,
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>,
      },
      {
        path:'/post/:postId',
      
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);