
"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Pencil, Plus, Trash2 } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

import EditFaqModal, { FaqFormData } from "./EditFaqModal"
import ConfirmDeleteModal from "@/components/dashboard/common/ConfirmDeleteModal"

import {
  FaqDetails,
  updateFaq,
  createFaq,
  deleteFaq,
} from "@/utils"
interface FaqData {
    id:string,
    question: string,
    answer: string,
}
export default function EditFaq() {
  const [faqs, setFaqs] = useState<FaqData[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState<FaqFormData>({ question: "", answer: "" })
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)

  // fetch on mount
  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const data = await FaqDetails()
      setFaqs(data)
      setLoading(false)
    }
    load()
  }, [])

  const openEdit = (index: number) => {
    setSelectedIndex(index)
    setFormData({ question: faqs[index].question, answer: faqs[index].answer })
    setModalOpen(true)
  }

  const openAdd = () => {
    setSelectedIndex(null)
    setFormData({ question: "", answer: "" })
    setModalOpen(true)
  }

  const handleSave = async (data: FaqFormData) => {
    setSaving(true)
    if (selectedIndex !== null) {
      // Update existing FAQ
      const id = faqs[selectedIndex].id
      const updatedList = [...faqs]
      updatedList[selectedIndex] = { id, ...data }
      setFaqs(updatedList)
      await updateFaq(id, data)
    } else {
      // Create new FAQ
      const res = await createFaq(data)
      if (res.success && res.faq) {
        const newFaq: FaqData = res.faq
        setFaqs(prev => [...prev, newFaq])
      }
    }
    setSaving(false)
    setModalOpen(false)
  }

  const confirmDelete = async () => {
    if (deleteIndex === null) return
    const id = faqs[deleteIndex].id
    const res = await deleteFaq(id)
    if (res.success) setFaqs(faqs => faqs.filter((_, i) => i !== deleteIndex))
    setDeleteOpen(false)
    setDeleteIndex(null)
  }

  return (
    <main className="flex flex-col items-center gap-10 my-8">
      <h1 className="text-4xl font-bold">Edit FAQs</h1>
      <div className="max-w-3xl w-full space-y-4">
        {loading ? (
          <div className="h-32 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
          </div>
        ) : (
          faqs.map((faq, i) => (
            <div key={faq.id} className="border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="text-left w-full flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}  
                  />
                </button>
                <div className="flex gap-2 ml-4">
                  <Pencil
                    className="w-5 h-5 cursor-pointer text-green-900"
                    onClick={() => openEdit(i)}
                  />
                  <Trash2
                    className="w-5 h-5 cursor-pointer text-red-500"
                    onClick={() => { setDeleteIndex(i); setDeleteOpen(true) }}
                  />
                </div>
              </div>
              {openFaq === i && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))
        )}
        <button
          onClick={openAdd}
          className="flex items-center gap-2 mt-4 px-4 py-2 bg-[#2d3c2d] text-white rounded hover:bg-[#1b261b]"
        >
          <Plus className="w-4 h-4" /> Add FAQ
        </button>
      </div>

      <EditFaqModal
        isOpen={modalOpen}
        faq={formData}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />

      <ConfirmDeleteModal
        open={deleteOpen}
        title="Delete FAQ"
        message="Are you sure you want to delete this FAQ?"
        onClose={() => setDeleteOpen(false)}
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
    </main>
  )
}
