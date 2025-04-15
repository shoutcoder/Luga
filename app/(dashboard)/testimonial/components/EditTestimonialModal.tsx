import { useState,useEffect,useRef } from "react";
import { Star } from 'lucide-react';
interface EditTestimonialModalProps {
    isOpen: boolean;
    testimonial: { name: string, avatar: string, text: string, rating: number };
    onClose: () => void;
    onSave: () => void;
    onChange: (field: string, value: string | number) => void;
  }
  
  const EditTestimonialModal = ({ isOpen, testimonial, onClose, onSave, onChange }: EditTestimonialModalProps) => {
    if (!isOpen) return null
      const modalRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, [onClose]);
  
    return (
      <div className="fixed inset-0 text-black bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 ">
        <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-md w-[35rem]">
          <h2 className="text-xl font-bold">Edit Testimonial</h2>
  
          <div className="mt-4">
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              value={testimonial.name}
              onChange={(e) => onChange("name", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </div>
  
          <div className="mt-4">
            <label className="block text-sm font-semibold">Avatar URL</label>
            <input
              type="text"
              value={testimonial.avatar}
              onChange={(e) => onChange("avatar", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </div>
  
          <div className="mt-4">
            <label className="block text-sm font-semibold">Testimonial Text</label>
            <textarea
              value={testimonial.text}
              onChange={(e) => onChange("text", e.target.value)}
              className="w-full h-28 p-2 border border-gray-300 rounded-md mt-1"
            />
          </div>
  
          <div className="mt-4">
            <label className="block text-sm font-semibold">Rating</label>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                  <Star
                  key={i}
                  onClick={() => onChange("rating", i + 1)}
                  className={`w-6 h-6 cursor-pointer transition-colors mt-1.5 ${
                    i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
  
          <div className="mt-4 flex justify-between">
            <button onClick={onClose} className="text-gray-500">Cancel</button>
            <button onClick={onSave} className="bg-[#2d3c2d] hover:bg-[#1b261b]  text-white px-4 py-2 rounded-md">Save</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default EditTestimonialModal
  