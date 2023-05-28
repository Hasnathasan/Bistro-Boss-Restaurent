import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Layouts/Home/Home/Home";
import Menu from "../Layouts/Menu/Menu/Menu";
import Order from "../Layouts/Order/Order";
import Login from "../Layouts/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: "/order/:category",
        element: <Order></Order>
      },
      
    ]
  },
  {
        path: '/login',
        element: <Login></Login>
      }
]);

export default router;
