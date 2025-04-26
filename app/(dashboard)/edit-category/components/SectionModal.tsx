"use client"

import { useState, useEffect } from "react"

interface SectionModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (title: string) => void
  initialTitle: string
}

const SectionModal = ({ isOpen, onClose, onSave, initialTitle }: SectionModalProps) => {
  const [title, setTitle] = useState(initialTitle)

  useEffect(() => {
    setTitle(initialTitle)
  }, [initialTitle, isOpen])

  const handleSave = () => {
    if (!title) return
    onSave(title)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">Add Section</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4"
          placeholder="Section Title"
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

export default SectionModal
