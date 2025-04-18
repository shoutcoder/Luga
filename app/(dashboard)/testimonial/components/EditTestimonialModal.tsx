"use client"

import React, { useEffect, useRef } from "react"
import { Star } from "lucide-react"

export interface TestimonialFormData {
  name: string | undefined
  avatar: string
  text: string
  rating: number
}

interface EditTestimonialModalProps {
  isOpen: boolean
  testimonial: TestimonialFormData
  onClose: () => void
  onSave: () => void
  onChange: (field: keyof TestimonialFormData, value: string | number) => void
}

const EditTestimonialModal: React.FC<EditTestimonialModalProps> = ({ isOpen, testimonial, onClose, onSave, onChange }) => {
  if (!isOpen) return null
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  return (
    <div className="fixed text-black inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-md w-[35rem]">
        <h2 className="text-xl font-bold mb-4">Edit Testimonial</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Name</label>
          <input
            type="text"
            value={testimonial.name}
            onChange={e => onChange("name", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Avatar URL</label>
          <input
            type="text"
            value={testimonial.avatar}
            onChange={e => onChange("avatar", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Testimonial Text</label>
          <textarea
            value={testimonial.text}
            onChange={e => onChange("text", e.target.value)}
            className="w-full h-28 p-2 border border-gray-300 rounded-md mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Rating</label>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                onClick={() => onChange("rating", i + 1)}
                className={`w-6 h-6 cursor-pointer transition-colors ${
                  i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 text-gray-500">Cancel</button>
          <button onClick={onSave} className="px-4 py-2 bg-[#2d3c2d] hover:bg-[#1b261b] text-white rounded-md">Save</button>
        </div>
      </div>
    </div>
  )
}

export default EditTestimonialModal
