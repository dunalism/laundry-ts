import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { login, register } from "./crud";
import { redirect } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
export default axiosInstance;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTanggal(tanggal) {
  const date = new Date(tanggal).toLocaleString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return date.replace(/\//g, "-");
}

export async function registerAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await register(data);
  console.log("response", response);
  if (!response) {
    return redirect("/auth/register");
  } else {
    return redirect("/auth/login");
  }
}

export async function loginAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await login(data);
  localStorage.setItem("user", JSON.stringify(response));
  if (!response) {
    return redirect("/auth/login");
  } else {
    return redirect("/dashboard");
  }
}
