import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import ThemeToggle from "@/components/theme-toggle";

export default function Layout() {
  return (
    <>
      <SidebarProvider className="flex max-md:hidden ">
        <AppSidebar classname="" placement="left" />
        <div className="px-3 pt-2 grow bg-base-200">
          <div className="mb-3 ml-[2px]  flex justify-between">
            <SidebarTrigger />
            <ThemeToggle className="mt-[-2px]" />
          </div>
          <div className="px-1 flex-1 min-h-[542px] rounded-md">
            <Outlet />
          </div>
        </div>
      </SidebarProvider>

      {/* <SidebarProvider className="hidden">
        <AppSidebar placement="right" />
        <SidebarTrigger />
        <ThemeToggle />
        <Outlet />
      </SidebarProvider> */}
    </>
  );
}
