import axios from "@/lib/utils";
import { AxiosError, Product } from "./definition";
import { toast } from "react-toastify";

export const register = async (data) => {
  try {
    const response = await axios.post("/auth/register", data);
    console.log("response", response);
    toast.success("Registration successful");
    return response.data;
  } catch (errorz) {
    const errorx = errorz as AxiosError;
    const serverError = Boolean(errorx.status === 500);
    const sameUsername = errorx.response.data.error;

    if (serverError) toast.error("Internal server error", { draggable: true });
    if (sameUsername)
      toast.error(`${sameUsername}!`, {
        draggable: true,
      });
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post("/auth/login", data);
    toast.success("Login successful. Welcome to the app!");
    return response.data;
  } catch (errorz) {
    const errorx = errorz as AxiosError;
    const serverError = Boolean(errorx.status === 500);
    const { error } = errorx.response.data;

    if (serverError) toast.error("Internal server error", { draggable: true });
    if (error)
      toast.error(`${error}!`, {
        draggable: true,
      });
  }
};

export const getProducts = async (token: string) => {
  try {
    const response = await axios.get("/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getUsers = async (token: string) => {
  try {
    const response = await axios.get("/admin/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getCustomers = async (token: string) => {
  try {
    const response = await axios.get("/customers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getTransactions = async (token: string) => {
  try {
    const response = await axios.get("/transactions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const addProduct = async (data: Omit<Product, "id">, token: string) => {
  const response = await axios.post("/products", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};
