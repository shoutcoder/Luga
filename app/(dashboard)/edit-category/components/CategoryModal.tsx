"use client"

import { useState, useEffect } from "react"

interface CategoryModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (title: string) => void
  initialTitle?: string
}

const CategoryModal = ({ isOpen, onClose, onSave, initialTitle }: CategoryModalProps) => {
  const [title, setTitle] = useState(initialTitle || "")

  useEffect(() => {
    if (initialTitle) setTitle(initialTitle)
  }, [initialTitle])

  const handleSave = () => {
    onSave(title)
    setTitle("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">{initialTitle ? "Edit Category" : "Add Category"}</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4"
          placeholder="Category Title"
        />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryModal
