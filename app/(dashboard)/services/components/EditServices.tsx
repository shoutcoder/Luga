"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"
import EditServiceModal from "./EditServiceModal"
import { OurServices, updateService } from "@/utils"
 interface ServiceSlide {
  id: string
  title: string
  url: string
}

export default function EditServices() {
  const [services, setServices] = useState<ServiceSlide[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingService, setEditingService] = useState<ServiceSlide>({
    id: "",
    title: "",
    url: "",
  })

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const data = await OurServices()
      setServices(data)
      setLoading(false)
    }
    load()
  }, [])

  const openModal = (i: number) => {
    setEditingIndex(i)
    setEditingService({ ...services[i] })
    setIsModalOpen(true)
  }

  const handleChange = (field: string, value: string) => {
    setEditingService((prev) => ({ ...prev, [field]: value }))
  }

  const save = async () => {
    if (editingIndex === null) return
    setSaving(true)
    const updated = [...services]
    updated[editingIndex] = editingService
    setServices(updated)

    await updateService(editingService.id!, {
      title: editingService.title,
      url: editingService.url,
    })

    setSaving(false)
    setIsModalOpen(false)
  }

  return (
    <div className="py-6 flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold text-center text-primary">Edit Services</h2>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      ) : (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          className="w-[80vw] md:w-[40vw] h-[75vh]"
        >
          {services.map((svc, idx) => (
            <SwiperSlide key={svc.id}>
              <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-md border-gray-300">
                <img
                  src={svc.url}
                  alt={svc.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{svc.title}</h3>
                </div>
                <button
                  className="absolute top-3 right-3 bg-white text-black px-4 py-1 rounded-md text-sm shadow"
                  onClick={() => openModal(idx)}
                >
                  Edit
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <EditServiceModal
        isOpen={isModalOpen}
        slide={editingService}
        onClose={() => setIsModalOpen(false)}
        onSave={save}
        onChange={handleChange}
      />

      {saving && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg flex items-center gap-3">
            <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
            <span>Saving...</span>
          </div>
        </div>
      )}
    </div>
  )
}
