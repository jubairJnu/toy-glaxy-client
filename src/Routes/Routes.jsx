import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Toys from "../Pages/All Toys/Toys";
import Home from "../Pages/Homes/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'alltoys',
        element:<Toys></Toys>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  },
]);

export default router;