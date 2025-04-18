"use server"

import prisma from "@/lib/prisma";
interface Items{
    id:string;
    name:string;
    price:string;
    sectionId:string;
}
interface Sections {
    id:string;
    title:string;
    categoryId:string;
    items:Items[]
}
interface Category {
    id:string
    title: string
    sections: Sections[]
}
export const CategoryDetails = async ():Promise<Category[]>=>{
    try{
        const categoryData = await prisma.category.findMany({
            select:{
                id:true,
                title:true,
                sections:{
                    select:{
                        id:true,
                        title:true,
                        categoryId:true,
                        items:{
                            select:{
                                id:true,
                                name:true,
                                price:true,
                                sectionId:true,
                            }
                        }
                    }
                }
            },
        })
        return categoryData;
    }
    catch(err){
        return []
    }
}