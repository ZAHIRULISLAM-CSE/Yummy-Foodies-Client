import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../../App";
import Login from "../login/Login";
import Register from "../register/Register";
import Home from "../homepage/Home";
import SingleChefReceipe from "../chef_receipes/SingleChefReceipe";
import Error from "../errorPage/Error";
import Blog from "../blogs/Blog";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      errorElement:<Error></Error>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
            path: "login",
            element:<Login></Login>
        },
        {
            path: "register",
            element:<Register></Register>,
        },
        {
          path: "blog",
          element:<Blog></Blog>,
        },
        {
          path: "chefRecipe/:id",
          element:<SingleChefReceipe></SingleChefReceipe>,
        }
      ]
    },
  ]);

  export default router;