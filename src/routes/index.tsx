import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import LoginPage from "../pages/Login";
// import Logout from "../pages/Logout";
import { ProtectedRoute } from "./ProtectedRoute";
import RegisterPage from "../pages/Register";
import Logout from "../pages/Logout";
import ProfilePage from "../pages/Profile";
import HomePage from "../pages/HomeUser";

const Routes = () => {
  const { token, role } = useAuth();

  // Define routes accessible only to authenticated users
  const routesForUser = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/myform",
          element: <div> Form</div>,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];
  const routesForAdmin = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <div>Admin Home Page</div>,
        },
        {
          path: "/admin",
          element: <div>Admin Profile</div>,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];
  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...(token && role === "user" ? routesForUser : []), // Conditionally include user routes
    ...(token && role === "admin" ? routesForAdmin : []), //
  ]);
  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
