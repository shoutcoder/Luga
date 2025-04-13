"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-white" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="absolute right-3 top-3 p-2" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
          <div className="flex flex-col items-center space-y-6 p-8 bg-white">
            <Link href="/" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#services" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/pricing" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="#hours" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Opening Hours
            </Link>
            <Link href="/about" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              About us
            </Link>
            <Link href="/contact" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
