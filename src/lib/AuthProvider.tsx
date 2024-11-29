/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
import { LoginResponse } from "./definition";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  auth: false,
  logOut: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const response: LoginResponse = JSON.parse(
    localStorage.getItem("user") as string
  );

  const auth = response?.auth;

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("auth/login");
  };

  return (
    <AuthContext.Provider value={{ auth, logOut: handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
