import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Layouts/Home/Home/Home";
import Menu from "../Layouts/Menu/Menu/Menu";
import Order from "../Layouts/Order/Order";
import Login from "../Layouts/Login/Login";
import SignUp from "../Layouts/SignUp/SignUp";
import PrivateRoute from "../Layouts/PrivateRoute/PrivateRoute";
import Cart from "../Layouts/AddToCart/Cart/Cart";
import DashBoard from "../Layouts/DashBoard/DashBoard/DashBoard";
import MyCart from "../Layouts/DashBoard/MyCart";
import MyHome from "../Layouts/DashBoard/MyHome";
import AllUsers from "../Layouts/DashBoard/Admin/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: (
          <PrivateRoute>
            <Menu></Menu>
          </PrivateRoute>
        ),
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: '/addtocart',
        element: <Cart></Cart>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    // element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>
      },
      {
        path: "myhome",
        element: <MyHome></MyHome>
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>
      },
    ]
  }
]);

export default router;
