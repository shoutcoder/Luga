"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import EditVisitUsModal, { Location } from "./EditVisitUsModal"
import { LocationsDetails, updateLocation } from "@/utils"
interface Locations {
    id:string,
    area: string
    address: string
    weekdayHours: string
    saturdayHours: string
    phone: string
}
export default function EditVisitUs() {
  const [locations, setLocations] = useState<Locations[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const data = await LocationsDetails()
      setLocations(data)
      setLoading(false)
    }
    load()
  }, [])

  const handleEditClick = (index: number) => {
    setEditingIndex(index)
    setIsModalOpen(true)
  }

  const handleSave = async (edited: Location) => {
    if (editingIndex === null) return
    setSaving(true)

    const updated = [...locations]
    updated[editingIndex] = { ...updated[editingIndex], ...edited }
    setLocations(updated)

    await updateLocation(updated[editingIndex].id, {
      area: edited.area,
      address: edited.address,
      weekdayHours: edited.weekdayHours,
      saturdayHours: edited.saturdayHours,
      phone: edited.phone,
    })

    setSaving(false)
    setIsModalOpen(false)
  }

  return (
    <section id="hours" className="py-14 bg-[#2d3c2d] text-white relative">
      <div className="container mx-auto px-4">
        <div className="border border-white mb-6 w-max mx-auto rounded-full flex items-center justify-center px-4 py-2 bg-[rgba(255,255,255,0.05)]">
          <h2 className="text-xs text-center">EDIT YOUR NEAREST LOCATION</h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, idx) => (
              <div key={loc.id} className="border border-white rounded-[10px] text-center p-6">
                <div className="flex justify-center mb-4">
                  <Image src="/time.png" width={100} height={100} alt="Clock" />
                </div>
                <h3 className="text-xl font-bold mb-2">{loc.area}</h3>
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <p className="text-sm">{loc.address}</p>
                </div>
                <div className="border border-white/70 rounded-[15px] py-3 mb-4">
                  <p className="text-sm">Mon–Fri: {loc.weekdayHours}</p>
                  <p className="text-sm">Sat: {loc.saturdayHours}</p>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <Phone className="w-4 h-4 mr-2" />
                  <p className="text-sm">{loc.phone}</p>
                </div>
                <button
                  onClick={() => handleEditClick(idx)}
                  className="w-max border border-white px-10 rounded-full py-2 text-sm"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingIndex !== null && (
        <EditVisitUsModal
          isOpen={isModalOpen}
          location={locations[editingIndex]}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}

      {/* Saving Overlay */}
      {saving && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg flex items-center gap-3">
            <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
            <span className="text-black">Saving...</span>
          </div>
        </div>
      )}
    </section>
  )
}
