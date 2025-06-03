import type React from "react";
import "../globals.css";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import MainNav from "@/components/main-nav";
import Link from "next/link";
import SocialMediaBar from "@/components/dashboard/common/SocialMediaBar";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Choose weights you need
  variable: "--font-poppins", // optional CSS variable
});
export const metadata = {
  title: "Luga - Tailoring and Dry Cleaning Services",
  description:
    "Professional tailoring and dry cleaning services with over 25 years of experience.",
  generator: "v0.dev",
  icons: {
    icon: "https://www.lugaskredderi.no/logo.png",
    shortcut: "https://www.lugaskredderi.no/logo.png",
    apple: "https://www.lugaskredderi.no/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.lugaskredderi.no/logo.png"
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen relative">
            <MainNav />
            {/* <SocialMediaBar/> */}
            {children}
            {/* Footer */}
            <footer className="py-6 bg-[#2d3c2d] text-white">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm">Opphavsrett © 2025 Luga</p>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <Link href="/purchase-terms" className="text-sm">
                      Vilkår for bruk
                    </Link>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <Link href="/purchase-terms" className="text-sm">
                      Personvernerklæring
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
