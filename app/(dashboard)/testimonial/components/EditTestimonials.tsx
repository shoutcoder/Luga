"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Pencil, Plus, Trash2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import EditTestimonialModal from "./EditTestimonialModal";
import ConfirmDeleteModal from "@/components/dashboard/common/ConfirmDeleteModal"; // Import the delete modal

export default function EditTestimonials() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [testimonials, setTestimonials] = useState(testimonial);
    const [editingData, setEditingData] = useState({ name: "", avatar: "", text: "", rating: 0 });
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [testimonialToDelete, setTestimonialToDelete] = useState<number | null>(null);

    const handleEditClick = (index: number) => {
        setEditingIndex(index);
        setEditingData(testimonials[index]);
        setIsModalOpen(true);
    };

    const handleSave = () => {
        const updated = [...testimonials];
        if (editingIndex === testimonials.length) {
            updated.push(editingData);
        } else {
            updated[editingIndex!] = editingData;
        }
        setTestimonials(updated);
        setIsModalOpen(false);
    };

    const handleChange = (field: string, value: string | number) => {
        setEditingData(prev => ({ ...prev, [field]: value }));
    };

    const handleAddNew = () => {
        setEditingIndex(testimonials.length);
        setEditingData({ name: "", avatar: "", text: "", rating: 0 });
        setIsModalOpen(true);
    };

    const handleDelete = (index: number) => {
        setTestimonialToDelete(index); // Set the testimonial to delete
        setDeleteModalOpen(true); // Open the delete confirmation modal
    };

    const confirmDelete = () => {
        if (testimonialToDelete !== null) {
            setTestimonials(testimonials.filter((_, i) => i !== testimonialToDelete)); // Delete the testimonial
            setDeleteModalOpen(false); // Close the delete modal
            setTestimonialToDelete(null); // Reset the testimonial to delete
        }
    };

    // Add dummy card at the end
    const allCards = [...testimonials, { name: "", avatar: "", text: "", rating: 0, isAddCard: true }];
    const chunked = [];
    for (let i = 0; i < allCards.length; i += 4) {
        chunked.push(allCards.slice(i, i + 4));
    }

    return (
        <section className="py-10 md:py-20 bg-[#dadeda] text-white bg-[url('/customer.jpg')] bg-cover bg-center h-full">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8 py-10 px-4">
                <h2 className="text-4xl font-semibold mb-6 text-center text-white">Edit Testimonials</h2>

                <Swiper modules={[Navigation]} navigation spaceBetween={20} slidesPerView={1} className="w-full text-base">
                    <style jsx global>{`
                        .swiper-button-next::after, .swiper-button-prev::after {
                            color: #10b981;
                        }
                    `}</style>

                    {chunked.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {group.map((testimonial, i) =>
                                    (testimonial as any).isAddCard ? (
                                        <div
                                            key={`add-${i}`}
                                            onClick={handleAddNew}
                                            className="bg-white text-black p-6 rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
                                        >
                                            <Plus className="w-6 h-6 mr-2" />
                                            <span>Add New Testimonial</span>
                                        </div>
                                    ) : (
                                        <div key={i} className="bg-white p-6 rounded-lg shadow-md relative text-black">
                                            <button
                                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                                                onClick={() => handleEditClick(i)}
                                            >
                                                <Pencil className="w-4 h-4 text-green-700" />
                                            </button>
                                            <button
                                                className="absolute top-3 right-10 text-gray-400 hover:text-gray-700"
                                                onClick={() => handleDelete(i)}
                                            >
                                                <Trash2 className="w-4 h-4 text-red-500" />
                                            </button>
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                                    <Image
                                                        src={testimonial.avatar}
                                                        alt={testimonial.name}
                                                        width={48}
                                                        height={48}
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-1">{testimonial.name}</h4>
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${i < Math.floor(testimonial.rating)
                                                                        ? "fill-yellow-400 text-yellow-400"
                                                                        : i < testimonial.rating
                                                                            ? "fill-yellow-400 text-yellow-200"
                                                                            : "text-gray-300"
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm">{testimonial.text}</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

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
            </div>
        </section>
    );
}


const testimonial = [
    {
      name: "Mathias Danielsson",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
      rating:5,
    },
    {
      name: "Mathias Danielsson",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
      rating:4,
    },
    {
      name: "Mathias Danielsson",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
      rating:3,
    },
    {
      name: "Mathias Danielsson",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
      rating:5,
    },
    {
      name: "Mathias Danielsson",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
      rating:4,
    },
    {
      name: "Mathias Danielsson",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Amazing service! Chatted with a lovely attendant and they took several days to sort out the bag and were online all during the process.",
      rating:5,
    },
  ];
