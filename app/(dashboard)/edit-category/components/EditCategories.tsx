"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash, Trash2 } from "lucide-react"
import { CategoryDetails, createCategory, updateCategory, deleteCategory, createSection,deleteSection, createItem, updateSection, updateItem, deleteItem } from "@/utils"
import CategoryModal from "./CategoryModal"
import SectionModal from "./SectionModal"
import ItemModal from "./ItemModal"
import ConfirmDeleteModal from "@/components/dashboard/common/ConfirmDeleteModal"

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

  //CategoryModal 
  const [modalDeleteCategory, setModalDeleteCategory] = useState<boolean>(false)
  const [deleteCategoryId, setDeleteCategoryId] = useState<string | null>(null);

  // Section
  const [newSectionTitle, setNewSectionTitle] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null)

  //SectionModal 
  const [modalDeleteSection, setModalDeleteSection] = useState<boolean>(false)
  const [deletSectionId, setDeleteSectionId] = useState<string | null>(null);

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
  //Category Delete
  const confirmDelete = async () => {
    try {
      setLoading(true);
      if (deleteCategoryId)
        await deleteCategory(deleteCategoryId)
    }
    catch (err) {

    } finally {
      loadCategories()
      setModalDeleteCategory(false)
      setDeleteCategoryId(null);
    }

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
  //Section Delete
  const confirmDeleteSection = async () => {
    try {
      setLoading(true);
      if (deletSectionId)
        await deleteSection(deletSectionId)
    }
    catch (err) {

    } finally {
      loadCategories()
      setModalDeleteSection(false)
      setDeleteSectionId(null);
    }

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
  //Item Delete
  const deleteItemHandler = async (id: string) => {
    try {
      setLoading(true);
      if (id)
        await deleteItem(id)
    }
    catch (err) {

    } finally {
      loadCategories()
      setLoading(false)
    }

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
              <div className="flex justify-center items-center gap-3">
                <button onClick={() => handleEditCategory(category)} className="text-blue-600 flex items-center gap-1">
                  <Edit size={16} /> Edit
                </button>
                <button onClick={() => { setModalDeleteCategory(true); setDeleteCategoryId(category.id) }} className="text-red-600 flex items-center gap-1">
                  <Trash size={16} />
                </button>
              </div>

            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.sections.map((section) => (
                <div key={section.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">{section.title}</h3>
                    <div>
                    <button onClick={() => handleEditSection(section)} className="text-blue-600">
                      <Edit size={14} />
                    </button>
                    <button onClick={() => { setModalDeleteSection(true); setDeleteSectionId(section.id) }} className="text-red-600 flex items-center gap-1">
                  <Trash size={16} />
                </button>
                    </div>
                    
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div className="flex justify-between items-center flex-1 mr-5" >
                          <span>{item.name}</span>
                          <span>NOK {item.price}</span>
                        </div>
                        <div className="flex gap-2">

                          <button onClick={() => handleEditItem(item)}>
                            <Edit size={14} />
                          </button>
                          <button className="text-purple-500" onClick={() => deleteItemHandler(item.id)}>
                            <Trash size={14} />
                          </button>
                        </div>

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

      <ConfirmDeleteModal
        open={modalDeleteCategory}
        title="Confirm Delete"
        message="Are you sure you want to delete this Category?"
        onClose={() => setModalDeleteCategory(false)}
        onConfirm={confirmDelete}
      />
      <ConfirmDeleteModal
        open={modalDeleteSection}
        title="Confirm Delete"
        message="Are you sure you want to delete this Section?"
        onClose={() => setModalDeleteSection(false)}
        onConfirm={confirmDeleteSection}
      />
    </div>
  )
}
