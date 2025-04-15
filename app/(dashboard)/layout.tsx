import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/common/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })
export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <main className="min-h-screen max-w-screen overflow-scroll">
            <SidebarProvider>
              <AppSidebar />
                <SidebarTrigger />
                <div className=" py-5 pr-5 w-full" >
                {children}
                </div>
            </SidebarProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
