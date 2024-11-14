import { Receipt, User, Package, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "User",
    url: "users",
    icon: User,
  },
  {
    title: "Produk",
    url: "products",
    icon: Package,
  },
  {
    title: "Transaksi",
    url: "transactions",
    icon: Receipt,
  },
];

export function AppSidebar() {
  const location = useLocation().pathname;

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    {...(location === `/${item.url}`
                      ? { isActive: true }
                      : { isActive: false })}
                    asChild
                  >
                    <Link
                      className="text-zinc-800 dark:text-zinc-200"
                      to={item.url}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
