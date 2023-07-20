import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Toys from "../Pages/All Toys/Toys";
import Home from "../Pages/Homes/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SIgnUp/SignUp";
import AddToy from "../Pages/AddToy/AddToy";
import MyToy from "../Pages/MyToy/MyToy";
import PrivateRoutes from "../Provider/PrivateRoutes";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Update from "../Pages/Update/Update";

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
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'add',
        element:<AddToy></AddToy>
      },
      {
        path:'mytoy',
        element:<MyToy></MyToy>
      },
    {
      path:'details/:id',
      element:<PrivateRoutes><ViewDetails></ViewDetails> </PrivateRoutes>,
      loader:({params})=> fetch(`http://localhost:5000/add/${params.id}`)
    },
    {
      path:'update/:id',
      element:<Update></Update>
    }
    ]
  },
]);

export default router;