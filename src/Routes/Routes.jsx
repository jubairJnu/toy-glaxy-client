import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Toys from "../Pages/All Toys/Toys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Toys></Toys>

      }
    ]
  },
]);

export default router;