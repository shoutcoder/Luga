
"use client"

import React, { useState, useEffect, useRef } from 'react'

export interface CategoryForm {
  title: string
}

interface EditPriceCategoryModalProps {
  isOpen: boolean
  category: CategoryForm
  onClose: () => void
  onSave: (data: CategoryForm) => void
}

const EditPriceCategoryModal: React.FC<EditPriceCategoryModalProps> = ({ isOpen, category, onClose, onSave }) => {
  const [form, setForm] = useState<CategoryForm>(category)
  const modalRef = useRef<HTMLDivElement>(null)
    
  useEffect(() => { setForm(category) }, [category])
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">{category.title ? 'Edit Category' : 'New Category'}</h3>
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full border p-2 rounded" />
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button onClick={() => onSave(form)} className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  )
}

export default EditPriceCategoryModal
