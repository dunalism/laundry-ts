import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navigate, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/theme-toggle";
import { PanelRight } from "lucide-react";
import { Datas, useAuth } from "@/lib/AuthProvider";
import { useEffect } from "react";
import {
  getCustomers,
  getProducts,
  getTransactions,
  getUsers,
} from "@/lib/crud";
import { LoginResponse } from "@/lib/definition";

export default function Layout() {
  const { auth, setDatas, setToken } = useAuth();
  const datas: Datas = {
    products: [],
    users: [],
    customers: [],
    transactions: [],
    totalTransc: [],
    token: "",
  };

  useEffect(() => {
    const user = localStorage.getItem("user") as string;

    const response: LoginResponse = JSON.parse(
      user !== "undefined" ? user : `{"token":false}`
    );

    const token = response?.token;
    async function fetchDatas() {
      datas.products = await getProducts(token);
      datas.users = await getUsers(token);
      datas.customers = await getCustomers(token);
      datas.transactions = await getTransactions(token);

      setDatas(datas);
      setToken(token);
    }

    if (auth) {
      fetchDatas();
    }
  }, []);

  const isLogged = auth;
  if (isLogged) {
    return (
      <>
        <SidebarProvider className="flex max-md:hidden ">
          <AppSidebar classname="" placement="left" />
          <div className="relative box-border grow peer  bg-base-200">
            <nav className="mb-3  p-2 drop-shadow-xl bg-base-200   flex justify-between">
              <SidebarTrigger className="mt-1 ml-2" />
              <ThemeToggle className="mt-[-2px] mr-1 " />
            </nav>
            <div className="box-border peer flex-1 min-h-[522px]">
              <Outlet />
            </div>
          </div>
        </SidebarProvider>

        <SidebarProvider className="flex md:hidden ">
          <AppSidebar classname="" placement="right" />
          <div className="max-[360px]:max-w-[360px] max-[376px]:max-w-[376px] box-border grow bg-base-200">
            <nav className="mb-3  p-2 drop-shadow-xl bg-base-200  flex justify-between">
              <ThemeToggle className="mt-[-2px] mr-1 " />
              <SidebarTrigger icon={<PanelRight />} className="mt-1 ml-2" />
            </nav>
            <div className="box-border peer flex-1 min-h-[522px] rounded-md">
              <Outlet />
            </div>
          </div>
        </SidebarProvider>
      </>
    );
  }
  return <Navigate to="auth/login" />;
}
