import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import ThemeToggle from "@/components/theme-toggle";
import { PanelRight } from "lucide-react";

export default function Layout() {
  return (
    <>
      <SidebarProvider className="flex max-md:hidden ">
        <AppSidebar classname="" placement="left" />
        <div className=" box-border grow bg-base-200">
          <nav className="mb-3  p-2 drop-shadow-xl bg-base-200  flex justify-between">
            <SidebarTrigger className="mt-1 ml-2" />
            <ThemeToggle className="mt-[-2px] mr-1 " />
          </nav>
          <div className="border-box p-4 flex-1 min-h-[534px] rounded-md">
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
