import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Products from "./Products";
import Transactions from "./Transactions";
import ErrorPage from "@/routes/Error";
import Index from "./Index";
import Customers from "./Customers";
import Login from "./Login";
import Component from "./Component";
import Register from "./Register";
import { loginAction } from "@/lib/utils";
import { AuthProvider } from "@/lib/AuthProvider";

const root = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <AuthProvider>
          <Layout />
        </AuthProvider>
      ),
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "users", element: <Users /> },
        { path: "customers", element: <Customers /> },
        { path: "products", element: <Products /> },
        { path: "transactions", element: <Transactions /> },
      ],
    },
    {
      path: "auth/login",
      errorElement: <ErrorPage />,
      element: (
        <AuthProvider>
          <Login />
        </AuthProvider>
      ),
      action: loginAction,
    },
    {
      path: "auth/register",
      errorElement: <ErrorPage />,
      element: (
        <AuthProvider>
          <Register />
        </AuthProvider>
      ),
    },
    { path: "/component", element: <Component /> },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default root;
