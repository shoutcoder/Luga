"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"
import EditSlideModal from "./EditSlideModal"
import { HeroBannerDetails, updateHeroBanner } from "@/utils"

interface Slide {
  id: string
  url: string
  title: string
  description: string
  ctaButton: string
  ctaLink: string
}

export default function EditHeroSlides() {
  const [slides, setSlides] = useState<Slide[]>([])
  const [loadingSlides, setLoadingSlides] = useState(true)
  const [savingSlide, setSavingSlide] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingSlide, setEditingSlide] = useState<Slide>({
    id: "",
    url: "",
    title: "",
    description: "",
    ctaButton: "",
    ctaLink: ""
  })

  useEffect(() => {
    const fetchSlides = async () => {
      setLoadingSlides(true)
      const data = await HeroBannerDetails()
      setSlides(data)
      setLoadingSlides(false)
    }
    fetchSlides()
  }, [])

  const openModal = (index: number) => {
    setEditingIndex(index)
    setEditingSlide({ ...slides[index] })
    setIsModalOpen(true)
  }

  const handleModalChange = (field: string, value: string) => {
    setEditingSlide((prev) => ({ ...prev, [field]: value }))
  }

  const saveSlide = async () => {
    if (editingIndex === null) return
    setSavingSlide(true)

    const updatedSlides = [...slides]
    updatedSlides[editingIndex] = editingSlide
    setSlides(updatedSlides)

    await updateHeroBanner(editingSlide.id, {
      title: editingSlide.title,
      description: editingSlide.description,
      url: editingSlide.url,
      ctaButton: editingSlide.ctaButton,
      ctaLink: editingSlide.ctaLink
    })

    setSavingSlide(false)
    setIsModalOpen(false)
  }

  return (
    <div className="py-6 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-center text-primary">Edit Hero Slides</h2>

      {loadingSlides ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      ) : (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true, type: "bullets" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-[80vw] md:w-[70vw] h-[75vh] text-black"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-md w-full border-gray-300">
                {/* <img
                  src={slide.url}
                  alt={`Slide ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                /> */}
                {(() => {
                  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
                  const isVideo = videoExtensions.some(ext => slide.url.includes(ext));
                  return isVideo ? (
                    <video
                      src={slide.url}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <img
                      src={slide.url}
                      alt={`Slide ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  );
                })()}

                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-sm">{slide.description}</p>
                  <button className="inline-flex items-center px-10 py-3 bg-white text-gray-800 rounded-full font-medium"
                  >{slide.ctaButton}</button>

                  <p>{slide.ctaLink}</p>
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
      )}

      <EditSlideModal
        isOpen={isModalOpen}
        slide={editingSlide}
        onClose={() => setIsModalOpen(false)}
        onSave={saveSlide}
        onChange={handleModalChange}
      />

      {savingSlide && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg flex items-center gap-3">
            <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
            <span>Saving slide...</span>
          </div>
        </div>
      )}
    </div>
  )
}
