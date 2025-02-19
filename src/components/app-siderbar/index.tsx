import { Home, LogOut, Package } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

// Menu items.
const items = [
  {
    title: "Tableau de bord",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Produits",
    url: "/products",
    icon: Package,
  },
]

export function AppSidebar() {
  const router = useRouter();

  const auth = useAuth();

  return (
    <Sidebar>
      <SidebarContent className="flex flex-col justify-between">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <Button variant="ghost" className="w-full justify-end" onClick={() => {
            localStorage.removeItem("token");
            auth?.logout();
            router.push("/login");
          }}>Deconnexion <LogOut /></Button>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
