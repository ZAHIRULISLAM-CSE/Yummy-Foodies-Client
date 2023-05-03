import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../../App";
import Login from "../login/Login";
import Register from "../register/Register";
import Home from "../homepage/Home";
import SingleChefReceipe from "../chef_receipes/SingleChefReceipe";

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
        },
        {
          path: "/chefRecipe/:id",
          element:<SingleChefReceipe></SingleChefReceipe>,
          loader:({params})=>fetch(`http://localhost:3000/chefReceipe/${params.id}`)
        }
      ]
    },
  ]);

  export default router;