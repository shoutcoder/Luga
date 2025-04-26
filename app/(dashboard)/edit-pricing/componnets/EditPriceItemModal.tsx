
"use client"

import React, { useState, useEffect, useRef } from 'react'

export interface PriceItemForm {
    id?: string;
    name: string
    price: string
}

interface EditPriceItemModalProps {
    isOpen: boolean
    item: PriceItemForm
    onClose: () => void
    onSave: (updated: PriceItemForm) => void
}

const EditPriceItemModal: React.FC<EditPriceItemModalProps> = ({ isOpen, item, onClose, onSave }) => {
    const [form, setForm] = useState<PriceItemForm>(item)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setForm(item)
    }, [item])

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
                <h3 className="text-xl font-semibold mb-4">
                    {item.id ? "Edit Price Item" : "Add New Price Item"}
                </h3><div className="mb-4">
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full border p-2 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Price (NOK)</label>
                    <input
                        type="text"
                        value={form.price}
                        onChange={e => setForm({ ...form, price: e.target.value })}
                        className="w-full border p-2 rounded" />
                </div>
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                    <button onClick={() => onSave(form)} className="px-4 py-2 bg-[#2d3c2d] hover:bg-[#1b261b] text-white rounded">Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditPriceItemModal
