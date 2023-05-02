import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../../App";
import Login from "../login/Login";
import Register from "../register/Register";
import Home from "../homepage/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/register",
            element:<Register></Register>,
        }
      ]
    },
  ]);

  export default router;