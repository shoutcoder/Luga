
// components/EditTestimonials.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Pencil, Plus, Trash2 } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

import EditTestimonialModal from "./EditTestimonialModal"
import ConfirmDeleteModal from "@/components/dashboard/common/ConfirmDeleteModal"

import {
  TestimonialDetails,
  updateTestimonial,
  createTestimonial,
  deleteTestimonial,
} from "@/utils"

interface TestimonialData {
    id:string;
    name: string;
    avatar: string;
    text: string;
    rating: number;
  }
export default function EditTestimonials() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingData, setEditingData] = useState<TestimonialData>({
    id: "",
    name: "",
    avatar: "",
    text: "",
    rating: 0,
  })

  // delete confirm
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [testimonialToDelete, setTestimonialToDelete] = useState<number | null>(null)

  // fetch on mount
  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const data = await TestimonialDetails()
      setTestimonials(data)
      setLoading(false)
    }
    load()
  }, [])

  const handleEditClick = (index: number) => {
    setEditingIndex(index)
    setEditingData(testimonials[index])
    setIsModalOpen(true)
  }

  const handleAddNew = () => {
    setEditingIndex(null)
    setEditingData({id:"", name: "", avatar: "", text: "", rating: 0 })
    setIsModalOpen(true)
  }

  const handleDelete = (index: number) => {
    setTestimonialToDelete(index)
    setDeleteModalOpen(true)
  }

  const confirmDelete = async () => {
    if (testimonialToDelete === null) return
    const idToDelete = testimonials[testimonialToDelete].id
    const res = await deleteTestimonial(idToDelete)
    if (res.success) {
      setTestimonials(t => t.filter((_, i) => i !== testimonialToDelete))
    }
    setDeleteModalOpen(false)
    setTestimonialToDelete(null)
  }

  const handleChange = (field: string, value: string | number) => {
    setEditingData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    setSaving(true)

    if (editingIndex !== null && editingData.id) {
      // update
      const updated = [...testimonials]
      updated[editingIndex] = editingData as TestimonialData
      setTestimonials(updated)
      await updateTestimonial(editingData.id, {
        name: editingData.name as string,
        avatar: editingData.avatar as string,
        text: editingData.text as string,
        rating: editingData.rating as number,
      })
    } else {
      // create
      const res = await createTestimonial({
        name: editingData.name as string,
        avatar: editingData.avatar as string,
        text: editingData.text as string,
        rating: editingData.rating as number,
      })
      if (res.success && res.testimonial) {
        setTestimonials(t => [...t, res.testimonial!])
      }
    }

    setSaving(false)
    setIsModalOpen(false)
  }

  // chunk into groups of 4 + an "Add" card
  const all = [...testimonials, { id: "add", name: "", avatar: "", text: "", rating: 0 } as any]
  const chunked: any[][] = []
  for (let i = 0; i < all.length; i += 4) chunked.push(all.slice(i, i + 4))

  return (
    <section className="py-10 bg-[#dadeda] text-white bg-[url('/customer.jpg')] bg-cover bg-center">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-8">
        <h2 className="text-4xl font-semibold text-center text-white">
          Edit Testimonials
        </h2>

        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
          </div>
        ) : (
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            className="w-full text-base"
          >
            <style jsx global>{`
              .swiper-button-next::after,
              .swiper-button-prev::after {
                color: #10b981;
              }
            `}</style>

            {chunked.map((group, page) => (
              <SwiperSlide key={page}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {group.map((t, i) =>
                    (t as any).id === 'add' ? (
                      <div
                        key={`add-${i}`}
                        onClick={handleAddNew}
                        className="bg-white text-black p-6 rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
                      >
                        <Plus className="w-6 h-6 mr-2" />
                        <span>Add New Testimonial</span>
                      </div>
                    ) : (
                      <div
                        key={t.id}
                        className="bg-white p-6 rounded-lg shadow-md relative text-black"
                      >
                        <button
                          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                          onClick={() => handleEditClick(page * 4 + i)}
                        >
                          <Pencil className="w-4 h-4 text-green-700" />
                        </button>
                        <button
                          className="absolute top-3 right-10 text-gray-400 hover:text-gray-700"
                          onClick={() => handleDelete(page * 4 + i)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>

                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <Image
                              src={t.avatar}
                              alt={t.name}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">{t.name}</h4>
                            <div className="flex">
                              {[...Array(5)].map((_, star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star < t.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        <p className="text-sm">{t.text}</p>
                      </div>
                    )
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <EditTestimonialModal
          isOpen={isModalOpen}
          testimonial={editingData}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          onChange={handleChange}
        />

        <ConfirmDeleteModal
          open={deleteModalOpen}
          title="Delete Testimonial"
          message="Are you sure you want to delete this testimonial?"
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={confirmDelete}
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
    </section>
  )
}
