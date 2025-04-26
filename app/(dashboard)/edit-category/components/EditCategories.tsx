"use client"

import { useState, useEffect } from "react"
import { Plus, Edit } from "lucide-react"
import { CategoryDetails, createCategory, updateCategory, createSection, createItem, updateSection,updateItem } from "@/utils"
import CategoryModal from "./CategoryModal"
import SectionModal from "./SectionModal"
import ItemModal from "./ItemModal"

interface Item {
  id: string
  name: string
  price: string
  sectionId: string
}

interface Section {
  id: string
  title: string
  categoryId: string
  items: Item[]
}

interface Category {
  id: string
  title: string
  sections: Section[]
}

export default function EditCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  // Modals
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [isSectionModalOpen, setIsSectionModalOpen] = useState(false)
  const [isItemModalOpen, setIsItemModalOpen] = useState(false)

  // Category
  const [newCategoryTitle, setNewCategoryTitle] = useState("")
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null)

  // Section
  const [newSectionTitle, setNewSectionTitle] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null)

  // Item
  const [newItemName, setNewItemName] = useState("")
  const [newItemPrice, setNewItemPrice] = useState("")
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    setLoading(true)
    const data = await CategoryDetails()
    setCategories(data)
    setLoading(false)
  }

  // Category
  const handleAddCategory = () => {
    setNewCategoryTitle("")
    setEditingCategoryId(null)
    setIsCategoryModalOpen(true)
  }

  const handleEditCategory = (category: Category) => {
    setNewCategoryTitle(category.title)
    setEditingCategoryId(category.id)
    setIsCategoryModalOpen(true)
  }

  const handleSaveCategory = async (title: string) => {
    if (editingCategoryId) {
      await updateCategory(editingCategoryId, { title })
    } else {
      await createCategory({ title })
    }
    await loadCategories()
  }

  // Section
  const handleAddSection = (categoryId: string) => {
    setNewSectionTitle("")
    setSelectedCategoryId(categoryId)
    setEditingSectionId(null)
    setIsSectionModalOpen(true)
  }

  const handleEditSection = (section: Section) => {
    setNewSectionTitle(section.title)
    setEditingSectionId(section.id)
    setIsSectionModalOpen(true)
  }

  const handleSaveSection = async (title: string) => {
    if (editingSectionId) {
      await updateSection(editingSectionId, { title })
    } else if (selectedCategoryId) {
      await createSection({ title, categoryId: selectedCategoryId })
    }
    await loadCategories()
  }

  // Item
  const handleAddItem = (sectionId: string) => {
    setNewItemName("")
    setNewItemPrice("")
    setSelectedSectionId(sectionId)
    setEditingItemId(null)
    setIsItemModalOpen(true)
  }
  const handleEditItem = (item: Item) => {
    setNewItemName(item.name)
    setNewItemPrice(item.price)
    setSelectedSectionId(item.sectionId)
    setEditingItemId(item.id)
    setIsItemModalOpen(true)
  }
  const handleSaveItem = async (name: string, price: string) => {
    if (editingItemId) {
      await updateItem(editingItemId, { name, price })
    } else if (selectedSectionId) {
      await createItem({ name, price, sectionId: selectedSectionId })
    }
    await loadCategories()
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Categories</h1>
        <button onClick={handleAddCategory} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          <Plus size={16} /> Add Category
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        categories.map((category) => (
          <section key={category.id} className="mb-16">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{category.title}</h2>
              <button onClick={() => handleEditCategory(category)} className="text-blue-600 flex items-center gap-1">
                <Edit size={16} /> Edit
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.sections.map((section) => (
                <div key={section.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">{section.title}</h3>
                    <button onClick={() => handleEditSection(section)} className="text-blue-600">
                      <Edit size={14} />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div className="flex justify-between items-center flex-1 mr-5" >
                        <span>{item.name}</span>
                        <span>NOK {item.price}</span>
                            </div>
                            <button onClick={() => handleEditItem(item)}>
                          <Edit size={14} />
                        </button>
                        
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleAddItem(section.id)}
                    className="mt-2 w-full flex items-center justify-center text-sm text-white bg-green-600 py-1 rounded-lg"
                  >
                    <Plus size={12} className="mr-1" /> Add Item
                  </button>
                </div>
              ))}
              <button
                onClick={() => handleAddSection(category.id)}
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-6 hover:bg-gray-50"
              >
                <Plus size={24} />
                <span>Add Section</span>
              </button>
            </div>
          </section>
        ))
      )}

      {/* Modals */}
      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSave={handleSaveCategory}
        initialTitle={newCategoryTitle}
      />

      <SectionModal
        isOpen={isSectionModalOpen}
        onClose={() => setIsSectionModalOpen(false)}
        onSave={handleSaveSection}
        initialTitle={newSectionTitle}
      />

      <ItemModal
        isOpen={isItemModalOpen}
        onClose={() => setIsItemModalOpen(false)}
        onSave={handleSaveItem}
        initialName={newItemName}
        initialPrice={newItemPrice}
      />
    </div>
  )
}
