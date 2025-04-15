"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from 'swiper/modules'
import EditSlideModal from "./EditSlideModal"

export default function EditHeroSlides() {
  const dummyHeroSlides = [
    {
      image: "https://ik.imagekit.io/vv/Section%20(1).jpg?updatedAt=1744566223910",
      title: "Tailoring and dry cleaning",
      description:
        "We accept small and large orders from individuals, companies and institutions. Our skilled tailor has over 25 years of experience in the profession and has sewn everything that can be sewn from ready-to-wear. With us you can get custom-made clothes for a perfect fit.",
    },
    {
      image: "https://ik.imagekit.io/vv/Section%20(1).jpg?updatedAt=1744566223910",
      title: "Professional suit making",
      description:
        "Get a perfectly tailored suit that fits your body and style. Our expert tailors create custom suits with premium fabrics and meticulous attention to detail.",
    },
    {
      image: "https://ik.imagekit.io/vv/Section%20(1).jpg?updatedAt=1744566223910",
      title: "Eco-friendly dry cleaning",
      description:
        "Our environmentally conscious dry cleaning services use safe, non-toxic solutions that are gentle on your clothes and the planet.",
    },]
  const [slides, setSlides] = useState(dummyHeroSlides)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingSlide, setEditingSlide] = useState({
    image: "",
    title: "",
    description: "",
  })

  const openModal = (index: number) => {
    setEditingIndex(index)
    setEditingSlide({ ...slides[index] })
    setIsModalOpen(true)
  }

  const handleModalChange = (field: string, value: string) => {
    setEditingSlide((prev) => ({ ...prev, [field]: value }))
  }

  const saveSlide = () => {
    if (editingIndex === null) return
    const updatedSlides = [...slides]
    updatedSlides[editingIndex] = editingSlide
    setSlides(updatedSlides)
    setIsModalOpen(false)
  }

  return (
    <div className=" py-6 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-center text-primary">Edit Hero Slides</h2>

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
        className=" w-[80vw] md:w-[70vw] h-[75vh] text-black"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-md w-full border-gray-300">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                <p className="text-sm">{slide.description}</p>
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


      <EditSlideModal
        isOpen={isModalOpen}
        slide={editingSlide}
        onClose={() => setIsModalOpen(false)}
        onSave={saveSlide}
        onChange={handleModalChange}
      />
    </div>
  )
}
