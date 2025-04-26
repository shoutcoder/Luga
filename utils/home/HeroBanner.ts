"use server"

import prisma from "@/lib/prisma";

interface HeroSlide {
    id:string,
    url: string
    title: string
    description: string
  }
export const HeroBannerDetails = async ():Promise<HeroSlide[]>=>{
    try{
        const hereBannerData = await prisma.heroBanner.findMany({
            select:{
                id:true,
                title:true,
                description:true,
                url:true,
            },
            orderBy:{
                createdAt:"asc"
            }
        })
        return hereBannerData;
    }
    catch(err){
        return []
    }
}
export const updateHeroBanner = async (id: string, updatedSlide: { title: string; description: string; url: string }) => {
    try {
      await prisma.heroBanner.update({
        where: { id },
        data: {
          title: updatedSlide.title,
          description: updatedSlide.description,
          url: updatedSlide.url,
        },
      })
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }
  }