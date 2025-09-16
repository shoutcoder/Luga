"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between">
        <Link href="https://repair.vandre.no/Luga/repair?language=no" className="flex items-center text-sm font-medium bg-white text-black px-6 py-1 rounded hover:bg-gray-200 hover:text-black transition">
            Bestill
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="absolute right-3 top-3 p-2" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
          <div className="flex flex-col items-center space-y-6 p-8 bg-white">
            <Link href="/" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Hjem
            </Link>
            <Link href="/#services" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Tjenester
            </Link>
            <Link href="/pricing" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Priser
            </Link>
            {/* <Link href="#hours" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Opening Hours
            </Link> */}
            <Link href="/about" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Om
            </Link>
            <Link href="/career" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Karriere
            </Link>
            <Link href="/contact" className="text-lg font-medium py-2 w-full block text-center" onClick={() => setIsOpen(false)}>
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
