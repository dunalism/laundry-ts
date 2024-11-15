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
    url: "dashboard",
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

export function AppSidebar({
  placement,
  classname,
}: {
  placement: "left" | "right";
  classname?: string | undefined;
}) {
  const location = useLocation().pathname;

  return (
    <Sidebar className={classname} side={placement} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-8 text-3xl ml-4 mt-4">
            Laundry
          </SidebarGroupLabel>
          <SidebarGroupContent className="">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="" key={item.title}>
                  <SidebarMenuButton
                    {...(location === `/${item.url}`
                      ? { isActive: true }
                      : { isActive: false })}
                    asChild
                    className="hover:bg-neutral hover:text-neutral-content text-base pl-7"
                  >
                    <Link className="" to={item.url}>
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
