"use server"

import prisma from "@/lib/prisma";

interface Locations {
    id:string,
    area: string
    address: string
    weekdayHours: string
    saturdayHours: string
    phone: string
}
export const LocationsDetails = async ():Promise<Locations[]>=>{
    try{
        const Locations = await prisma.location.findMany({
            select:{
                id:true,
                area:true,
                address:true,
                weekdayHours:true,
                saturdayHours:true,
                phone:true,
            }
        })
        return Locations;
    }
    catch(err){
        return []
    }
}
