import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import Pricing from "./pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/pricing",
        element: (
          <PrivateRoute>
            <Pricing />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
