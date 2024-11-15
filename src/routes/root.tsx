import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Products from "./Products";
import Transactions from "./Transactions";
import ErrorPage from "./Error";
import Index from "./Index";

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
        { path: "products", element: <Products /> },
        { path: "transactions", element: <Transactions /> },
      ],
    },
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
