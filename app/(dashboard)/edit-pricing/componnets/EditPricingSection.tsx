// components/EditPricingSection.tsx
"use client"

import { useState, useEffect } from 'react'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import EditPriceItemModal, { PriceItemForm } from './EditPriceItemModal'
import EditPriceCategoryModal, { CategoryForm } from './EditPriceCategoryModal'
import ConfirmDeleteModal from '@/components/dashboard/common/ConfirmDeleteModal'
import {
    PriceCategoryData,
    PriceItemData,
    PlanPriceDetails,
    updatePriceItem,
    createPriceItem,
    deletePriceItem,
    updatePriceCategory,
    createPriceCategory,
    deletePriceCategory,
} from '@/utils'
import { it } from 'node:test'

export default function EditPricingSection() {
    const [categories, setCategories] = useState<PriceCategoryData[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    // Item modal state
    const [itemModalOpen, setItemModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState<PriceItemData | null>(null)
    const [itemForm, setItemForm] = useState<PriceItemForm>({ name: '', price: '' })

    // Category modal state
    const [catModalOpen, setCatModalOpen] = useState(false)
    const [selectedCat, setSelectedCat] = useState<PriceCategoryData | null>(null)
    const [catForm, setCatForm] = useState<CategoryForm>({ title: '' })

    // Delete confirmation state
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const [deleteType, setDeleteType] = useState<'item' | 'category'>('item')

    // Load data on mount
    useEffect(() => {
        (async () => {
            setLoading(true)
            const data = await PlanPriceDetails()
            setCategories(data)
            setLoading(false)
        })()
    }, [])

    // Category handlers
    const openCatEdit = (cat?: PriceCategoryData) => {
        setSelectedCat(cat || null)
        setCatForm({ title: cat?.title || '' })
        setCatModalOpen(true)
    }

    const handleCatSave = async (data: CategoryForm) => {
        setSaving(true)
        if (selectedCat) {
            await updatePriceCategory(selectedCat.id, data)
            setCategories(prev =>
                prev.map(c => (c.id === selectedCat.id ? { ...c, title: data.title } : c))
            )
        } else {
            const res = await createPriceCategory(data)
            if (res.success && res.category) {
                const newCategory = res.category
                setCategories(prev => [...prev, newCategory])
            }
        }
        setSaving(false)
        setCatModalOpen(false)
    }

    // Item handlers
    const openItemEdit = (item?: PriceItemData, catId?: string) => {
        if (item) {
            setSelectedItem(item)
            setItemForm({id:item.id, name: item.name, price: item.price })
        } else if (catId) {
            setSelectedItem({ id: '', name: '', price: '', categoryId: catId })
            setItemForm({ name: '', price: '' })
        }
        setItemModalOpen(true)
    }

    const handleItemSave = async (data: PriceItemForm) => {
        setSaving(true)

        if (selectedItem?.id) {
            // ...update flow...
            const res = await updatePriceItem(selectedItem.id, data)

        if (res.success && res.item) {
            const updatedItem = res.item as PriceItemData

            setCategories(prev =>
                prev.map(cat =>
                    cat.id === updatedItem.categoryId
                        ? {
                              ...cat,
                              items: cat.items.map(item =>
                                  item.id === updatedItem.id ? updatedItem : item
                              ),
                          }
                        : cat
                )
            )
        }
        } else if (selectedItem) {
            const res = await createPriceItem(selectedItem.categoryId, data)
            if (res.success && res.item) {
                // Assert that res.item is non-nullable
                const newItem = res.item as PriceItemData

                setCategories(prev =>
                    prev.map(cat =>
                        cat.id === newItem.categoryId
                            ? { ...cat, items: [...cat.items, newItem] }
                            : cat
                    )
                )
            }
        }

        setSaving(false)
        setItemModalOpen(false)
    }


    // Delete handlers
    const handleDelete = (type: 'item' | 'category', id: string) => {
        setDeleteType(type)
        setDeleteId(id)
        setDeleteOpen(true)
    }

    const confirmDelete = async () => {
        if (!deleteId) return
        setSaving(true)
        if (deleteType === 'item') {
            await deletePriceItem(deleteId)
            setCategories(prev =>
                prev.map(cat => ({
                    ...cat,
                    items: cat.items.filter(i => i.id !== deleteId),
                }))
            )
        } else {
            await deletePriceCategory(deleteId)
            setCategories(prev => prev.filter(c => c.id !== deleteId))
        }
        setSaving(false)
        setDeleteOpen(false)
    }

    if (loading) return <div className="p-8 text-center">Loading...</div>

    return (
        <section className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">Edit Price List</h1>

            {/* New Category */}
            <div className="mb-4 flex justify-end">
                <button
                    onClick={() => openCatEdit()}
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded"
                >
                    <Plus /> New Category
                </button>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10' >
        {categories.map(cat => (
                <div key={cat.id} className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            {cat.title}
                            <Pencil
                                className="cursor-pointer text-blue-600"
                                onClick={() => openCatEdit(cat)}
                            />
                            <Trash2
                                className="cursor-pointer text-red-600"
                                onClick={() => handleDelete('category', cat.id)}
                            />
                        </h2>
                        <button
                            onClick={() => openItemEdit(undefined, cat.id)}
                            className="flex items-center gap-1 text-blue-600"
                        >
                            <Plus /> Add Item
                        </button>
                    </div>

                    {/* Items */}
                    <div className="border rounded p-4">
                        {cat.items.map(item => (
                            <div key={item.id} className="flex justify-between items-center py-2">
                                <div className="flex-1">
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm">NOK {item.price},-</p>
                                </div>
                                <div className="flex gap-2">
                                    <Pencil
                                        className="cursor-pointer"
                                        onClick={() => openItemEdit(item)}
                                    />
                                    <Trash2
                                        className="cursor-pointer text-red-600"
                                        onClick={() => handleDelete('item', item.id)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
            {/* Categories */}
           

            {/* Modals */}
            <EditPriceCategoryModal
                isOpen={catModalOpen}
                category={selectedCat || { title: '' }}
                onClose={() => setCatModalOpen(false)}
                onSave={handleCatSave}
            />

            <EditPriceItemModal
                isOpen={itemModalOpen}
                item={itemForm}
                onClose={() => setItemModalOpen(false)}
                onSave={handleItemSave}
            />

            <ConfirmDeleteModal
                open={deleteOpen}
                title={
                    deleteType === 'category' ? 'Delete Category' : 'Delete Item'
                }
                message={`Are you sure you want to delete this ${deleteType}?`}
                onClose={() => setDeleteOpen(false)}
                onConfirm={confirmDelete}
            />

            {/* Saving overlay */}
            {saving && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                </div>
            )}
        </section>
    )
}
