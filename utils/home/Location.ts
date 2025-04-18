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

export const updateLocation = async (
    id: string,
    data: {
      area: string
      address: string
      weekdayHours: string
      saturdayHours: string
      phone: string
    }
  ): Promise<{ success: boolean; error?: any }> => {
    try {
      await prisma.location.update({
        where: { id },
        data: {
          area: data.area,
          address: data.address,
          weekdayHours: data.weekdayHours,
          saturdayHours: data.saturdayHours,
          phone: data.phone,
        },
      })
      return { success: true }
    } catch (error) {
      console.error("update location error", error)
      return { success: false, error }
    }
  }
