import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Products from "./Products";
import Transactions from "./Transactions";
import ErrorPage from "./Error";
import Index from "./Index";
import Customers from "./Customers";
import Login from "./Login";
import Component from "./Component";

const root = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
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
    { path: "auth/login", errorElement: <ErrorPage />, element: <Login /> },
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
