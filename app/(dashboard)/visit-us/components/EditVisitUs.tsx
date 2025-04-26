"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Plus,Trash2 } from "lucide-react"
import EditVisitUsModal, { Location } from "./EditVisitUsModal"
import { LocationsDetails, updateLocation, createLocation ,deleteLocation} from "@/utils"
import Link from "next/link"
import ConfirmDeleteModal from "@/components/dashboard/common/ConfirmDeleteModal"

interface Locations {
  id: string
  area: string
  address: string
  weekdayHours: string
  saturdayHours: string
  phone: string
  redirection: string
}

export default function EditVisitUs() {
  const [locations, setLocations] = useState<Locations[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [deleteId, setdeleteId] = useState<string | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

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
    setSelectedLocation(locations[index])
    setIsAddingNew(false)
    setIsModalOpen(true)
  }

  const handleAddNewClick = () => {
    setEditingIndex(null)
    setSelectedLocation({
      area: "",
      address: "",
      weekdayHours: "",
      saturdayHours: "",
      phone: "",
      redirection: "",
    })
    setIsAddingNew(true)
    setIsModalOpen(true)
  }

  const handleSave = async (edited: Location) => {
    setSaving(true)

    if (isAddingNew) {
      // Call the API to create a new location (backend will generate the ID)
      const newLocation = await createLocation(edited)
      setLocations(prev => [...prev, newLocation])
    } else if (editingIndex !== null) {
      const updated = [...locations]
      updated[editingIndex] = { ...updated[editingIndex], ...edited }
      setLocations(updated)

      await updateLocation(updated[editingIndex].id, {
        area: edited.area,
        address: edited.address,
        weekdayHours: edited.weekdayHours,
        saturdayHours: edited.saturdayHours,
        phone: edited.phone,
        redirection: edited.redirection,
      })
    }

    setSaving(false)
    setIsModalOpen(false)
    setEditingIndex(null)
    setIsAddingNew(false)
  }
  const handleDeleteClick = (id: string) => {
    setdeleteId(id)
    setIsDeleteModalOpen(true)
  }
  const confirmDelete = async () => {
    if (deleteId === null) return
    await deleteLocation(deleteId)
    setLocations((prev) => prev.filter((loc) => loc.id !== deleteId))
    setIsDeleteModalOpen(false)
  }
  return (
    <section id="hours" className="py-14 bg-[#2d3c2d]  text-white relative">
       <button
              onClick={handleAddNewClick}
              className="mb-6 absolute right-10 top-10 px-4 py-2 bg-green-500 text-white rounded flex items-center gap-2"
            >
              <Plus size={18} /> Add New Location
            </button>
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
              <div key={loc.id} className=" relative border border-white rounded-[10px] text-center p-6">
                 <button
                  className=" absolute right-5 top-5 text-red-600 tex-sm rounded hover:underline text-sm"
                  onClick={() => handleDeleteClick(loc.id)}
                >
                  <Trash2 />
                </button>
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
                <div className="flex flex-col gap-4 justify-center items-center">
                  <Link
                    href={loc.redirection}
                    target="_blank"
                    className="w-max border border-white px-10 rounded-full py-2 text-sm"
                  >
                    Get Redirect
                  </Link>
                  <button
                    onClick={() => handleEditClick(idx)}
                    className="w-max border border-red-500 px-10 rounded-full py-2 text-sm"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && selectedLocation && (
        <EditVisitUsModal
          isOpen={isModalOpen}
          location={selectedLocation}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
      <ConfirmDeleteModal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Location"
        message="Are you sure you want to delete this location?"
      />
    </section>
  )
}
