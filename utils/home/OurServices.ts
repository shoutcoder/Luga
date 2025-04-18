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