import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import Dashboard from "../pages/Dashboard";
import { ForgotPassword } from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import ProtectedRoute from "./ProtectedRoute";
import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Dashboard } from "../pages/Dashboard";
// import AuthLayout from "../layouts/AuthLayout";
// import DashboardLayout from "../layouts/DashboardLayout";

export const Router = createBrowserRouter([
  {
    element: <AuthLayout />, // all auth pages share this layout
    children: [
      { path: "/", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [{ path: "/dashboard", element: <Dashboard /> }],
  },
]);
