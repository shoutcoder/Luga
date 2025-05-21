"use client"

import { useState, useEffect, useRef } from "react"

export type Location = {
  id?: string
  area: string
  address: string
  weekdayHours: string
  saturdayHours: string
  phone: string
  redirection:string
  email: string | null
}

type Props = {
  isOpen: boolean
  location: Location
  onClose: () => void
  onSave: (editedLocation: Location) => void
}

const EditVisitUsModal: React.FC<Props> = ({ isOpen, location, onClose, onSave }) => {
  const [editedLocation, setEditedLocation] = useState<Location>({ ...location })
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setEditedLocation({ ...location })
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  if (!isOpen) return null

  const handleChange = (field: keyof Location, value: string) => {
    setEditedLocation((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed text-black inset-0 bg-black/50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-2xl mb-4">{location.id ? "Edit Location" : "Add New Location"}</h2>

        {(["area", "address", "phone","email", "weekdayHours", "saturdayHours","redirection"] as (keyof Location)[]).map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-sm font-medium mb-1">{field === "weekdayHours" ? "Weekday Hours" : field === "saturdayHours" ? "Saturday Hours" : field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={editedLocation[field] || ""}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </div>
        ))}

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#2d3c2d] text-white rounded" onClick={() => onSave(editedLocation)}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditVisitUsModal
