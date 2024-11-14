import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import ThemeToggle from "@/components/theme-toggle";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function Layout() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <select className="select" data-choose-theme>
          <option value="garden">Light</option>
          <option value="sunset">Dark</option>
          <option value="cyberpunk">cyberpunk</option>
        </select>

        <SidebarTrigger />
        <ThemeToggle />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
