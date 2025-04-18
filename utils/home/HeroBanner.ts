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
            }
        })
        return hereBannerData;
    }
    catch(err){
        return []
    }
}