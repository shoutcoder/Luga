import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import MainNav from "@/components/main-nav"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Luga - Tailoring and Dry Cleaning Services",
  description: "Professional tailoring and dry cleaning services with over 25 years of experience.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <main className="min-h-screen">
            <MainNav />
            {children}
            {/* Footer */}
            <footer className="py-6 bg-[#2d3c2d] text-white">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm">Copyright © 2024 Luga</p>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <Link href="#" className="text-sm">
                      Terms of use
                    </Link>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <Link href="#" className="text-sm">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}