"use client"

import { useEffect, useState } from "react"
import {
    getServiceFeatures,
    createServiceFeature,
    updateServiceFeature,
    deleteServiceFeature,
    createFeatureDetail,
    updateFeatureDetail,
    deleteFeatureDetail,
} from "@/utils" // Adjust to actual path
import { ServiceFeature } from "./types"
import { Trash2, Plus } from "lucide-react"
import AddFeatureModal from "./AddFeatureModal"
import FullScreenLoader from "@/components/dashboard/common/FullScreenLoader"
import FeatureEditModal from "./FeatureEditModal"
interface ManageFeaturesProps {
    serviceId: string
}


export default function ManageFeatures({ serviceId }: ManageFeaturesProps) {
    const [features, setFeatures] = useState<ServiceFeature[]>([])
    const [loading, setLoading] = useState(true)

    const [newFeatureTitle, setNewFeatureTitle] = useState("")
    const [newFeatureImage, setNewFeatureImage] = useState("")
    // State for modal
    const [showModal, setShowModal] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [currentFeature, setCurrentFeature] = useState(null)

    useEffect(() => {
        loadFeatures()
    }, [serviceId])

    const loadFeatures = async () => {
        setLoading(true)
        const data = await getServiceFeatures(serviceId)
        setFeatures(data)
        setLoading(false)
    }

    const handleAddFeature = async () => {
        if (!newFeatureTitle) return
        setLoading(true);
        const res = await createServiceFeature(serviceId, {
            title: newFeatureTitle,
            image: newFeatureImage,
        })
        if (res.success) {
            setFeatures([...features, res.feature!])
            setNewFeatureTitle("")
            setNewFeatureImage("")
            setShowModal(false)
            setLoading(false)
        }
    }

    const handleUpdateFeature = async (id: string, title: string, image: string) => {
        setLoading(true)
        const res = await updateServiceFeature(id, { title, image })
        if (res.success) loadFeatures()
        setLoading(false)
    }

    const handleDeleteFeature = async (id: string) => {
        await deleteServiceFeature(id)
        loadFeatures()
    }

    const handleAddDetail = async (featureId: string, content: string) => {
        const res = await createFeatureDetail(featureId, content)
        if (res.success) loadFeatures()
    }

    const handleUpdateDetail = async (id: string, content: string) => {
        const res = await updateFeatureDetail(id, content)
        if (res.success) loadFeatures()
    }

    const handleDeleteDetail = async (id: string) => {
        await deleteFeatureDetail(id)
        loadFeatures()
    }
    const openEditModal = (feature: any) => {
        setCurrentFeature(feature)
        setIsEditModalOpen(true)
    }
      
const handleModalSave = (id: string, title: string, image: string) => {
    handleUpdateFeature(id, title, image)
    setIsEditModalOpen(false)
  }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Manage Service Features</h2>

            {/* <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add New Feature Section</h3>
        <input
          type="text"
          placeholder="Feature title"
          value={newFeatureTitle}
          onChange={(e) => setNewFeatureTitle(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newFeatureImage}
          onChange={(e) => setNewFeatureImage(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={handleAddFeature}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Feature
        </button>
      </div> */}
            <button
                onClick={() => setShowModal(true)}
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 hover:bg-gray-50"
            >
                <Plus size={24} />
                <span>Add Section</span>
            </button>

            {loading ? (
                <FullScreenLoader />
            ) : (
                features.map((feature) => (
                    <div key={feature.id} className="border p-4 rounded-lg mb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div className="flex-1">
                                <p className="font-bold text-lg mb-1">{feature.title}</p>
                                <p className="text-sm text-gray-600 mb-2">{feature.image}</p>
                                <button
                                    onClick={() => openEditModal(feature)}
                                    className="text-sm text-blue-600 underline hover:text-blue-800"
                                >
                                    Edit
                                </button>
                            </div>
                            <button
                onClick={() => handleDeleteFeature(feature.id)}
                className="text-red-600 mt-2 md:mt-0 bg-gray-100 p-2 rounded-full"
              >
                <Trash2/>
              </button>
                        </div>

                        <div className="mt-4 pl-2 border-l-2">
                            <h4 className="font-semibold mb-2">Feature Details</h4>
                            {feature.details.map((detail) => (
                                <div key={detail.id} className="flex items-center gap-2 mb-2">
                                    <input
                                        type="text"
                                        value={detail.content}
                                        onChange={(e) => handleUpdateDetail(detail.id, e.target.value)}
                                        className="flex-1 border p-1 rounded"
                                    />
                                    <button
                                        onClick={() => handleDeleteDetail(detail.id)}
                                        className="text-red-500"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}

                            <AddDetailForm featureId={feature.id} onAdd={handleAddDetail} />
                        </div>
                    </div>
                ))
            )}
            <AddFeatureModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onAdd={handleAddFeature}
                newFeatureTitle={newFeatureTitle}
                newFeatureImage={newFeatureImage}
                setNewFeatureTitle={setNewFeatureTitle}
                setNewFeatureImage={setNewFeatureImage}
            />
            <FeatureEditModal
                isOpen={isEditModalOpen}
                feature={currentFeature}
                onClose={() => setIsEditModalOpen(false)}
                onSave={handleModalSave}
            />
        </div>
    )
}

function AddDetailForm({
    featureId,
    onAdd,
}: {
    featureId: string
    onAdd: (featureId: string, content: string) => void
}) {
    const [newDetail, setNewDetail] = useState("")

    const handleAdd = () => {
        if (newDetail.trim()) {
            onAdd(featureId, newDetail)
            setNewDetail("")
        }
    }

    return (
        <div className="flex items-center gap-2 mt-2">
            <input
                type="text"
                placeholder="New detail..."
                value={newDetail}
                onChange={(e) => setNewDetail(e.target.value)}
                className="flex-1 border p-1 rounded"
            />
            <button onClick={handleAdd} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                Add
            </button>
        </div>
    )
}
