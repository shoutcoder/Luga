"use server"

import prisma from "@/lib/prisma";

interface Gallary {
    id:string,
    imageUrl: string,
    title?: string,
    caption?: string,
}
export const GallaryDetails = async ():Promise<Gallary[]>=>{
    try{
        const gallaryDetails = await prisma.gallery.findMany({
            select:{
                id:true,
                imageUrl:true
            }
        })
        return gallaryDetails;
    }
    catch(err){
        return []
    }
}
