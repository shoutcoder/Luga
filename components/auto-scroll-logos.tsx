"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

interface Client {
  name: string
  logo: string
}

interface AutoScrollLogosProps {
  clients: Client[]
}

export default function AutoScrollLogos({ clients }: AutoScrollLogosProps) {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        slidesPerView={3}
        breakpoints={{
          // when window width is >= 640px (tablet)
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // when window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={1500}
        className="py-4"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={100}
                height={40}
                className="object-contain h-10"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
