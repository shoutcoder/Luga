"use server"

import prisma from "@/lib/prisma";

interface HeroSlide {
    id:string,
    url: string
    title: string
    description: string
    ctaButton:string
    ctaLink:string
  }
export const HeroBannerDetails = async ():Promise<HeroSlide[]>=>{
    try{
        const hereBannerData = await prisma.heroBanner.findMany({
            select:{
                id:true,
                title:true,
                description:true,
                url:true,
                ctaButton:true,
                ctaLink:true,
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
export const updateHeroBanner = async (id: string, updatedSlide: { title: string; description: string; url: string;  ctaButton:string ;
  ctaLink:string}) => {
    try {
      await prisma.heroBanner.update({
        where: { id },
        data: {
          title: updatedSlide.title,
          description: updatedSlide.description,
          url: updatedSlide.url,
          ctaButton:updatedSlide.ctaButton,
          ctaLink:updatedSlide.ctaLink
        },
      })
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }
  }