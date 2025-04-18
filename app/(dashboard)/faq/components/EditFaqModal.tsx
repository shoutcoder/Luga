
"use client"

import React, { useState, useRef, useEffect } from 'react'

export interface FaqFormData {
  question: string
  answer: string
}

interface EditFaqModalProps {
  isOpen: boolean
  faq: FaqFormData
  onClose: () => void
  onSave: (updatedFaq: FaqFormData) => void
}

const EditFaqModal: React.FC<EditFaqModalProps> = ({ isOpen, faq, onClose, onSave }) => {
  const [formData, setFormData] = useState<FaqFormData>(faq)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setFormData(faq)
  }, [faq])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999] text-black bg-black/50 flex items-center justify-center">
      <div ref={modalRef} className="bg-white p-6 rounded-xl w-full max-w-[35rem] shadow-xl space-y-4">
        <h2 className="text-xl font-bold">{faq.question ? 'Edit FAQ' : 'Add FAQ'}</h2>

        <div>
          <label className="block mb-1 font-medium">Question</label>
          <input
            type="text"
            value={formData.question}
            onChange={e => setFormData({ ...formData, question: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Answer</label>
          <textarea
            value={formData.answer}
            onChange={e => setFormData({ ...formData, answer: e.target.value })}
            className="w-full h-24 p-2 border rounded"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Cancel</button>
          <button
            onClick={() => onSave(formData)}
            className="px-4 py-2 bg-[#2d3c2d] text-white rounded hover:bg-[#1b261b]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditFaqModal
