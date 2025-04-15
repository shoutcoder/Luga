"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from 'swiper/modules'
import EditServiceModal from "./EditServiceModal"

export default function EditServices() {
  const services = [
    {
      title: "Alteration and repair",
      image: "https://ik.imagekit.io/vv/Frame%204.jpg?updatedAt=1744566578020",
    },
    {
      title: "Dry cleaning",
      image: "https://ik.imagekit.io/vv/Frame%204.jpg?updatedAt=1744566578020",
    },
    {
      title: "Suit making",
      image: "https://ik.imagekit.io/vv/Frame%204.jpg?updatedAt=1744566578020",
    },
    {
      title: "Uniform Production",
      image: "https://ik.imagekit.io/vv/Frame%206.jpg?updatedAt=1744566578154",
    },
  ]

  const [servicesList, setServicesList] = useState(services)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingService, setEditingService] = useState({
    title: "",
    image: "",
  })

  const openModal = (index: number) => {
    setEditingIndex(index)
    setEditingService({ ...servicesList[index] })
    setIsModalOpen(true)
  }

  const handleModalChange = (field: string, value: string) => {
    setEditingService((prev) => ({ ...prev, [field]: value }))
  }

  const saveService = () => {
    if (editingIndex === null) return
    const updatedServices = [...servicesList]
    updatedServices[editingIndex] = editingService
    setServicesList(updatedServices)
    setIsModalOpen(false)
  }

  return (
    <div className="py-6 flex flex-col gap-8 items-center">
      <h2 className="text-3xl font-bold text-center text-primary">Edit Services</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-[80vw] md:w-[40vw] h-[75vh] text-black"
      >
        {servicesList.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-md w-full border-gray-300">
              <img
                src={service.image}
                alt={`Service ${index + 1}`}
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              </div>
              <button
                className="absolute top-3 right-3 bg-white text-black px-4 py-1 rounded-md text-sm shadow"
                onClick={() => openModal(index)}
              >
                Edit
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <EditServiceModal
        isOpen={isModalOpen}
        slide={editingService}
        onClose={() => setIsModalOpen(false)}
        onSave={saveService}
        onChange={handleModalChange}
      />
    </div>
  )
}
