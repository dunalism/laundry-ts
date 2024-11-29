import { Receipt, User, User2, Package, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { LoginResponse, Users } from "@/lib/definition";
import { NavUser } from "./ui/nav-user";

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
  const response: LoginResponse = JSON.parse(
    localStorage.getItem("user") as string
  );
  const location = useLocation().pathname;
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const user: Users = {
    name: response?.data.username,
    role: response?.data.role,
    avatar: `https://api.dicebear.com/9.x/notionists-neutral/svg?seed=${response?.data.username}&size=200`,
  };

  return (
    <Sidebar
      className={`${classname} peer`}
      side={placement}
      collapsible="icon"
    >
      <SidebarContent>
        {collapsed && (
          <SidebarHeader className="-mb-12 ">
            <img
              src="/favicon.ico"
              alt="laundryLogo"
              className="rounded-md h-8 w-8  "
            />
          </SidebarHeader>
        )}
        <SidebarGroup>
          <SidebarGroupLabel className="prose mb-10 ">
            <img
              src="/favicon.ico"
              alt="laundryLogo"
              className="mt-12 ml-2 rounded-md"
            />
            <h1 className="ml-4 mt-2">Laundry</h1>
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
