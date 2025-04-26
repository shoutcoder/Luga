"use client"

import { useState, useEffect } from "react"

interface ItemModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (name: string, price: string) => void
  initialName: string
  initialPrice: string
}

const ItemModal = ({ isOpen, onClose, onSave, initialName, initialPrice }: ItemModalProps) => {
  const [name, setName] = useState(initialName)
  const [price, setPrice] = useState(initialPrice)

  useEffect(() => {
    setName(initialName)
    setPrice(initialPrice)
  }, [initialName, initialPrice, isOpen])

  const handleSave = () => {
    if (!name || !price) return
    onSave(name, price)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">Add Item</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4"
          placeholder="Item Name"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4"
          placeholder="Item Price"
        />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded-lg">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Save</button>
        </div>
      </div>
    </div>
  )
}

export default ItemModal
