/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import {
  Customers,
  LoginResponse,
  Products,
  Transactions,
  TransctCol,
  UsersData,
} from "./definition";
import { useNavigate } from "react-router-dom";
import { formatTanggal } from "./utils";

export type Auth = {
  setDatas: (datas: Datas) => void;
  auth: boolean;
  logOut: () => void;
  setProducts: React.Dispatch<any>;
  setUsers: React.Dispatch<any>;
  setCustomers: React.Dispatch<any>;
  setTransactions: React.Dispatch<any>;
  setTotalTransc: React.Dispatch<any>;
  setToken: React.Dispatch<any>;
  setId: React.Dispatch<any>;
};

export type Datas = {
  products: Products[];
  users: UsersData[];
  transactions: Transactions[];
  totalTransc: TransctCol[];
  customers: Customers[];
  token: string;
  id: number;
};

export const AuthContext = createContext<Auth & Datas>({
  setDatas: () => {},
  auth: false,
  logOut: () => {},
  products: [],
  users: [],
  transactions: [],
  customers: [],
  setProducts: () => {},
  setUsers: () => {},
  setCustomers: () => {},
  setTransactions: () => {},
  totalTransc: [],
  setTotalTransc: () => {},
  token: "",
  setToken: () => {},
  id: 0,
  setId: () => {},
});

type Row = {
  id: number;
  custId: number;
  custName: string;
  totalTransc: string;
  count: number;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const datas: Datas = {
    products: [],
    users: [],
    customers: [],
    transactions: [],
    totalTransc: [],
    token: "",
    id: 0,
  };

  const [id, setId] = useState(datas?.id);
  const [token, setToken] = useState(datas?.token);
  const [totalTransc, setTotalTransc] = useState<TransctCol[]>([]);
  const [products, setProducts] = useState(datas?.products);
  const [users, setUsers] = useState(datas?.users);
  const [transactions, setTransactions] = useState(datas?.transactions);
  const [customers, setCustomers] = useState(datas?.customers);

  const user = localStorage.getItem("user") as string;

  const response: LoginResponse = JSON.parse(
    user !== "undefined" ? user : `{"auth":false}`
  );

  const auth = response ? response.auth : false;

  const handleLogOut = () => {
    localStorage.removeItem("user");
    document.body.style.pointerEvents = "auto";
    navigate("/auth/login");
    setProducts([]);
    setUsers([]);
    setCustomers([]);
    setTransactions([]);
    setTotalTransc([]);
    setToken("");
  };

  const setDatas = (datas: Datas) => {
    if (datas.users) {
      const updatedUsers = datas.users.map((user) => ({
        ...user,
        createdAt: formatTanggal(user.createdAt),
      }));
      setUsers(updatedUsers);
    }
    setProducts(datas?.products);
    // setUsers(datas?.users);
    if (datas.customers) {
      const updatedCust = datas.customers.map((cust) => ({
        ...cust,
        createdAt: formatTanggal(cust.createdAt),
      }));
      setCustomers(updatedCust);
    }
    if (datas.transactions) {
      const updatedTransct = datas.transactions
        .reduce((acc: Row[], bill) => {
          const found = acc.find(
            (item) => item.custName === bill.customer.name
          );
          if (found) {
            found.totalTransc = `${++found.count} Transactions`;
          } else {
            acc.push({
              id: bill.id,
              custId: bill.customer.id,
              custName: bill.customer.name,
              totalTransc: "1 Transactions",
              count: 1,
            });
          }
          return acc;
        }, [])
        .map(({ count, ...rest }) => rest);
      setTotalTransc(updatedTransct);
      setTransactions(datas.transactions);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        logOut: handleLogOut,
        products,
        setProducts: setProducts,
        customers,
        setCustomers: setCustomers,
        users,
        setUsers: setUsers,
        transactions,
        setTransactions: setTransactions,
        setDatas: setDatas,
        totalTransc,
        setTotalTransc: setTotalTransc,
        token,
        setToken: setToken,
        id,
        setId: setId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
