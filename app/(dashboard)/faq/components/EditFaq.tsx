"use client";
import React, { useState } from 'react';
import { ChevronDown, Pencil, Plus, Trash2 } from 'lucide-react';
import EditFaqModal from './EditFaqModal';
import ConfirmDeleteModal from '@/components/dashboard/common/ConfirmDeleteModal';

const EditFaq = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedFaqIndex, setSelectedFaqIndex] = useState<number | null>(null);
    const [faqs, setFaqs] = useState([
        { question: "Who should use Luga?", answer: "Anyone looking for high-quality tailoring and dry cleaning services." },
        { question: "What's required to use Luga?", answer: "Just bring your garments to our location or schedule a pickup." },
        { question: "How long does service take?", answer: "Most orders are ready in 2-3 business days." },
    ]);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [faqToDelete, setFaqToDelete] = useState<number | null>(null); // Track which FAQ to delete

    const handleEditClick = (index: number) => {
        setSelectedFaqIndex(index);
        setEditModalOpen(true);
    };

    const handleSave = (updatedFaq: { question: string; answer: string }) => {
        if (selectedFaqIndex === null) {
            setFaqs([...faqs, updatedFaq]); // Add new FAQ
        } else {
            const updatedFaqs = [...faqs];
            updatedFaqs[selectedFaqIndex] = updatedFaq; // Edit existing FAQ
            setFaqs(updatedFaqs);
        }
        setEditModalOpen(false);
        setSelectedFaqIndex(null);
    };

    const handleDelete = (index: number) => {
        setFaqToDelete(index); // Set the FAQ to delete
        setDeleteModalOpen(true); // Open the delete confirmation modal
    };

    const confirmDelete = () => {
        if (faqToDelete !== null) {
            setFaqs(faqs.filter((_, i) => i !== faqToDelete)); // Delete the selected FAQ
            setDeleteModalOpen(false); // Close the delete modal
            setFaqToDelete(null); // Reset the FAQ to delete
        }
    };

    const handleAddClick = () => {
        setSelectedFaqIndex(null);
        setEditModalOpen(true);
    };

    return (
        <main className="flex flex-col items-center gap-10 my-8">
            <h1 className="text-4xl font-bold">Edit FAQs</h1>
            <div className="max-w-3xl w-full space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 py-4">
                        <div className="flex justify-between items-center">
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="text-left w-full"
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="text-lg font-medium">{faq.question}</h4>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                                </div>
                            </button>
                            <div className="flex gap-2 ml-4">
                                <Pencil className="w-5 h-5 cursor-pointer text-green-900" onClick={() => handleEditClick(index)} />
                                <Trash2 className="w-5 h-5 cursor-pointer text-red-500" onClick={() => handleDelete(index)} />
                            </div>
                        </div>
                        {openFaq === index && (
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
                <button
                    onClick={handleAddClick}
                    className="flex items-center gap-2 mt-4 px-4 py-2 bg-[#2d3c2d] text-white rounded hover:bg-[#1b261b]"
                >
                    <Plus className="w-4 h-4" /> Add Question
                </button>
            </div>

            {editModalOpen && (
                <EditFaqModal
                    title={selectedFaqIndex === null ? "Add FAQ" : "Edit FAQ"}
                    faq={selectedFaqIndex === null ? { question: "", answer: "" } : faqs[selectedFaqIndex]}
                    onClose={() => setEditModalOpen(false)}
                    onSave={handleSave}
                />
            )}

            {/* ConfirmDeleteModal component with proper props */}
            <ConfirmDeleteModal
                open={deleteModalOpen} // Use the state to control visibility
                title="Delete FAQ"
                message="Are you sure you want to delete this FAQ?"
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={confirmDelete}
            />
        </main>
    );
};

export default EditFaq;
