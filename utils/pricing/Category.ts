"use server";

import prisma from "@/lib/prisma";
interface Items {
  id: string;
  name: string;
  price: string;
  sectionId: string;
}
interface Sections {
  id: string;
  title: string;
  categoryId: string;
  items: Items[];
}
interface Category {
  id: string;
  title: string;
  sections: Sections[];
}
export const CategoryDetails = async (): Promise<Category[]> => {
  try {
    const categoryData = await prisma.category.findMany({
      select: {
        id: true,
        title: true,
        sections: {
          select: {
            id: true,
            title: true,
            categoryId: true,
            items: {
              select: {
                id: true,
                name: true,
                price: true,
                sectionId: true,
              },
              orderBy: {
                createdAt: "asc",
              },
            },
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
      orderBy:{
        createdAt:"asc"
      }
    });
    return categoryData;
  } catch (err) {
    return [];
  }
};
export const createCategory = async (data: { title: string }) => {
  return await prisma.category.create({ data });
};

export const updateCategory = async (id: string, data: { title: string }) => {
  return await prisma.category.update({
    where: { id },
    data,
  });
};
export const deleteCategory = async (id: string) => {
  return await prisma.category.delete({
    where: { id }
  });
};

export const createSection = async (data: {
  title: string;
  categoryId: string;
}) => {
  return await prisma.section.create({ data });
};
export const deleteSection = async (id: string) => {
  return await prisma.section.delete({
    where: { id }
  });
};

export const createItem = async (data: {
  name: string;
  price: string;
  sectionId: string;
}) => {
  return await prisma.item.create({ data });
};
export const updateSection = async (id: string, data: { title: string }) => {
  return await prisma.section.update({
    where: { id },
    data,
  });
};
export const updateItem = async (
  id: string,
  data: { name?: string; price?: string }
) => {
  return await prisma.item.update({
    where: { id },
    data,
  });
};
export const deleteItem = async (id: string) => {
  return await prisma.item.delete({
    where: { id }
  });
};
