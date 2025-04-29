"use client";

import { usePathname } from "next/navigation";  // Import usePathname from Next.js

import {
  FileImage,
  LayoutDashboard,
  MessageCircleHeart,
  HelpCircle,
  CoinsIcon,
  ChartColumnStacked,
  Navigation,
  Users,
  
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Contact Details",
    url: "/dashboard",
    icon: FileImage,
  },
  {
    title: "Hero Banner",
    url: "/heroBanner",
    icon: FileImage,
  },
  {
    title: "Services",
    url: "/services",
    icon: LayoutDashboard,
  },
  {
    title: "Testimonial",
    url: "/testimonial",
    icon: MessageCircleHeart,
  },
  {
    title: "Manage Team",
    url: "/edit-team",
    icon: Users,
  },
  {
    title: "Visit Us",
    url: "/visit-us",
    icon: Navigation ,
  },
  {
    title: "Faq",
    url: "/faq",
    icon: HelpCircle,
  },
  {
    title: "Pricing",
    url: "/edit-pricing",
    icon: CoinsIcon,
  },
  {
    title: "Category",
    url: "/edit-category",
    icon: ChartColumnStacked,
  },
];

export function AppSidebar() {
  const pathname = usePathname();  // Get current path

  return (
    <Sidebar className="min-h-screen fixed z-[999] bg-[#2d3c2d] text-white shadow-xl backdrop-blur-md border-r border-[#3a5341]">
      <SidebarContent>
        <SidebarGroup>
          {/* Logo with border separator */}
          <div className="flex items-center justify-start py-6 px-5 border-b border-[#3a5341]">
            <img
              src="/logo.png"
              alt="Logo"
              width={130}
              height={70}
              className="w-[110px] h-[60px] object-contain"
              loading="lazy"
              decoding="async"
              style={{ color: "transparent" }}
            />
          </div>

          <SidebarGroupContent className="pt-6 px-2">
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;  // Check if current path matches the item's URL

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center gap-5 px-4 py-3 rounded-lg bg-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3a5341] hover:to-[#4a6b4f] group ${
                          isActive ? "bg-gradient-to-r from-[#3a5341] to-[#4a6b4f]" : ""
                        }`}
                      >
                        <item.icon
                          className={`h-5 w-5 text-white transform group-hover:scale-110 transition-all duration-300 ${
                            isActive ? "text-primary" : ""
                          }`}
                        />
                        <span
                          className={`text-base font-medium text-white duration-300 ${
                            isActive ? "font-bold" : ""
                          }`}
                        >
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
