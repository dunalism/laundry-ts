import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navigate, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/theme-toggle";
import { PanelRight } from "lucide-react";
import { LoginResponse } from "@/lib/definition";

export default function Layout() {
  const response: LoginResponse = JSON.parse(
    localStorage.getItem("user") as string
  );

  const isLogged = response?.auth;
  if (isLogged) {
    return (
      <>
        <SidebarProvider className="flex max-md:hidden ">
          <AppSidebar classname="" placement="left" />
          <div className="relative box-border grow peer peer-data-[state=collapsed]:data-[id=table]:bg-violet-500 bg-base-200">
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
          <div className=" box-border grow bg-base-200">
            <nav className="mb-3  p-2 drop-shadow-xl bg-base-200  flex justify-between">
              <ThemeToggle className="mt-[-2px] mr-1 " />
              <SidebarTrigger icon={<PanelRight />} className="mt-1 ml-2" />
            </nav>
            <div className="px-1 flex-1 min-h-[534px] rounded-md">
              <Outlet />
            </div>
          </div>
        </SidebarProvider>
      </>
    );
  }
  return <Navigate to="auth/login" />;
}
