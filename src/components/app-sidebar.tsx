import { Receipt, User, User2, Package, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Users } from "@/lib/definition";
import { NavUser } from "./ui/nav-user";

const user: Users = {
  name: "Hamdika",
  role: "owner",
  avatar:
    "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=dunalism&size=200",
};

// Menu items.
const items = [
  { title: "Dashboard", url: "dashboard", icon: LayoutDashboard },
  { title: "Users", url: "users", icon: User },
  { title: "Products", url: "products", icon: Package },
  { title: "Customers", url: "customers", icon: User2 },
  { title: "Transactions", url: "transactions", icon: Receipt },
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
    <Sidebar
      className={`${classname} peer`}
      side={placement}
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="prose mb-10">
            <h1 className="ml-5 mt-2">Laundry</h1>
          </SidebarGroupLabel>
          <SidebarGroupContent className="">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="" key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
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
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
