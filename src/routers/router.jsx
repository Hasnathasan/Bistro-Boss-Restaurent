import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
]);

export default router;
