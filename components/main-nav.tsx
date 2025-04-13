'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import MobileNav from "@/components/mobile-nav"

export default function MainNav() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-10 md:py-6 backdrop-blur-sm ${isHome ? 'bg-[#2d3c2d] md:bg-transparent' : 'bg-[#2d3c2d]'}`}>
      <div className="hidden md:flex items-center space-x-6 text-white">
        <Link href="/" className="text-sm font-medium">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium">
          About
        </Link>
        <Link href="#services" className="text-sm font-medium">
          Services
        </Link>
      </div>
      <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
        <Image 
          src="/logo.png"
          width={130}
          height={70}
          alt=""
          className="w-[100px] h-[60px]"
        />
      </Link>
      <div className="hidden md:flex items-center space-x-6 text-white">
        <Link href="/pricing" className="text-sm font-medium">
          Pricing
        </Link>
        <Link href="/contact" className="text-sm font-medium">
          Contact
        </Link>
      </div>
      <MobileNav />
    </nav>
  )
}
