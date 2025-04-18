"use server"

import prisma from "@/lib/prisma";

interface ServicesSlide {
    id:string,
    url: string
    title: string
}
export const OurServices = async ():Promise<ServicesSlide[]>=>{
    try{
        const OurServices = await prisma.service.findMany({
            select:{
                id:true,
                title:true,
                url:true,
            }
        })
        return OurServices;
    }
    catch(err){
        return []
    }
}

export const updateService = async (
    id: string,
    data: { title: string; url: string }
  ): Promise<{ success: boolean; error?: any }> => {
    try {
      await prisma.service.update({
        where: { id },
        data: { title: data.title, url: data.url },
      })
      return { success: true }
    } catch (error) {
      console.error("update service error", error)
      return { success: false, error }
    }
  }
  