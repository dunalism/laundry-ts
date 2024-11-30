/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext } from "react";
import { LoginResponse } from "./definition";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  auth: false,
  logOut: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const user = localStorage.getItem("user") as string;

  const response: LoginResponse = JSON.parse(
    user !== "undefined" ? user : `{"auth":false}`
  );

  const auth = response ? response?.auth : false;

  console.log("response", response);

  console.log("auth", auth);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ auth, logOut: handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
