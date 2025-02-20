import { Home, Package, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import LogoutButton from "../LogoutButton"

// Menu items.
export const protectedMenu = [
  {
    title: "Table de bord",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Produits",
    url: "/products",
    icon: Package,
  },
  {
    title: "Utilisateurs",
    url: "/users",
    icon: User,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="h-full justify-between">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {protectedMenu.map((item) => (
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
          <SidebarGroupContent className="flex justify-end">
            <LogoutButton />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
