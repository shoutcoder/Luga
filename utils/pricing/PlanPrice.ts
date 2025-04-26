"use server"

import prisma from "@/lib/prisma"

export interface PriceItemData {
  id: string
  name: string
  price: string
  categoryId: string
}

export interface PriceCategoryData {
  id: string
  title: string
  items: PriceItemData[]
}

/** fetch all categories and items */
export const PlanPriceDetails = async (): Promise<PriceCategoryData[]> => {
  try {
    return await prisma.priceCategory.findMany({
      select: {
        id: true,
        title: true,
        items: { select: { id: true, name: true, price: true, categoryId: true } },
      },
    })
  } catch (err) {
    console.error("fetch pricing error", err)
    return []
  }
}

/** update one category title */
export const updatePriceCategory = async (
  id: string,
  data: { title: string }
): Promise<{ success: boolean; error?: any }> => {
  try {
    await prisma.priceCategory.update({
      where: { id },
      data: { title: data.title },
    })
    return { success: true }
  } catch (error) {
    console.error("update price category error", error)
    return { success: false, error }
  }
}

/** create a new category */
export const createPriceCategory = async (
  data: { title: string }
): Promise<{ success: boolean; category?: PriceCategoryData; error?: any }> => {
  try {
    const category = await prisma.priceCategory.create({
      data: { title: data.title },
      include: { items: true },
    })
    return { success: true, category }
  } catch (error) {
    console.error("create price category error", error)
    return { success: false, error }
  }
}

/** delete a category and its items */
export const deletePriceCategory = async (
  id: string
): Promise<{ success: boolean; error?: any }> => {
  try {

    await prisma.priceItem.deleteMany({
      where: { categoryId: id },
    })

    // Then delete the category itself
    await prisma.priceCategory.delete({
      where: { id },
    })
    return { success: true }
  } catch (error) {
    console.error("delete price category error", error)
    return { success: false, error }
  }
}

/** update one item */
export const updatePriceItem = async (
  id: string,
  data: Omit<PriceItemData, 'id' | 'categoryId'>
): Promise<{ success: boolean; error?: any ; item?: PriceItemData }> => {
  try {
    const item = await prisma.priceItem.update({
      where: { id },
      data: { name: data.name, price: data.price },
      select:{
        id:true,name:true,price:true,categoryId:true,
      }
    })
    return { success: true ,item}
  } catch (error) {
    console.error("update price item error", error)
    return { success: false, error }
  }
}

/** create a new item */
export const createPriceItem = async (
  categoryId: string,
  data: Omit<PriceItemData, 'id' | 'categoryId'>
): Promise<{ success: boolean; item?: PriceItemData; error?: any }> => {
  try {
    const item = await prisma.priceItem.create({
      data: { name: data.name, price: data.price, categoryId },
    })
    return { success: true, item }
  } catch (error) {
    console.error("create price item error", error)
    return { success: false, error }
  }
}

/** delete an item */
export const deletePriceItem = async (
  id: string
): Promise<{ success: boolean; error?: any }> => {
  try {
    await prisma.priceItem.delete({ where: { id } })
    return { success: true }
  } catch (error) {
    console.error("delete price item error", error)
    return { success: false, error }
  }
}
