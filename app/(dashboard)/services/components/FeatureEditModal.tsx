import React, { useState, useEffect } from "react"

interface Props {
  isOpen: boolean
  feature: { id: string, title: string, image: string } | null
  onClose: () => void
  onSave: (id: string, title: string, image: string) => void
}

const FeatureEditModal = ({ isOpen, feature, onClose, onSave }: Props) => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {
    if (feature) {
      setTitle(feature.title)
      setImage(feature.image)
    }
  }, [feature])

  if (!isOpen || !feature) return null

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Feature</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          placeholder="Feature Title"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          placeholder="Image URL"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button
            onClick={() => onSave(feature.id, title, image)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeatureEditModal
