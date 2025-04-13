"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface Client {
  name: string
  logo: string
}

interface AutoScrollLogosProps {
  clients: Client[]
}

export default function AutoScrollLogos({ clients }: AutoScrollLogosProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    // Clone the clients for seamless scrolling
    const scrollContent = scrollRef.current
    const scrollWidth = scrollContent.scrollWidth / 2

    const scroll = () => {
      if (!scrollContent) return

      if (scrollContent.scrollLeft >= scrollWidth) {
        scrollContent.scrollLeft = 0
      } else {
        scrollContent.scrollLeft += 1
      }
    }

    const scrollInterval = setInterval(scroll, 30)

    return () => {
      clearInterval(scrollInterval)
    }
  }, [clients.length])

  // Double the clients array to create a seamless loop
  const doubledClients = [...clients, ...clients]

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={scrollRef}
        className="flex items-center space-x-5 py-4 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {doubledClients.map((client, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={100}
              height={40}
              className="object-contain h-10"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
