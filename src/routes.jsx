import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";
import EstateDetails from "./pages/EstateDetails";
import ErrorElement from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Home />, title: "Home" },
      {
        path: "/login",
        element: <Login />,
        title: "Login",
      },
      {
        path: "/signup",
        element: <Signup />,
        title: "Sign Up",
      },
      {
        path: "/pricing",
        title: "Pricing",
        element: (
          <PrivateRoute>
            <Pricing />
          </PrivateRoute>
        ),
      },
      {
        path: "/property/:propertyId",
        loader: () => {
          return fetch("data.json");
        },
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
