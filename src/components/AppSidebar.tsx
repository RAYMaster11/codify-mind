import { Home, MessageSquare, Workflow, Plug, Settings, Code2, Activity } from "lucide-react";
import { NavLink } from "react-router-dom";
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

const navItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "AI Chat", url: "/chat", icon: MessageSquare },
  { title: "Code Editor", url: "/editor", icon: Code2 },
  { title: "Workflows", url: "/workflows", icon: Workflow },
  { title: "Integrations", url: "/integrations", icon: Plug },
  { title: "Activity", url: "/activity", icon: Activity },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border/50">
      <div className="px-6 py-4 border-b border-border/50">
        <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          DevAI Studio
        </h1>
        <p className="text-xs text-muted-foreground mt-1">AI Development Platform</p>
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "bg-primary/10 text-primary border-l-2 border-primary"
                          : "hover:bg-muted/50 text-foreground/70 hover:text-foreground"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
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
