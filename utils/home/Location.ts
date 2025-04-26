"use server"

import prisma from "@/lib/prisma";

interface Locations {
    id:string,
    area: string
    address: string
    weekdayHours: string
    saturdayHours: string
    phone: string
    redirection:string
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
                redirection:true,
            },
            orderBy:{
                createdAt:"asc"
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
      redirection:string,

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
          redirection: data.redirection,
        },
      })
      return { success: true }
    } catch (error) {
      console.error("update location error", error)
      return { success: false, error }
    }
  }

  // Function to create a new location in the database
  export const createLocation = async (data: {
    area: string;
    address: string;
    weekdayHours: string;
    saturdayHours: string;
    phone: string;
    redirection: string;
  }) => {
    try {
      const newLocation = await prisma.location.create({
        data: {
          area: data.area,
          address: data.address,
          weekdayHours: data.weekdayHours,
          saturdayHours: data.saturdayHours,
          phone: data.phone,
          redirection: data.redirection,
        },
      });
      return newLocation;  // Return the created location
    } catch (error) {
      console.error("Error creating location:", error);
      throw new Error("Error creating location");
    }
  };
  
  export const deleteLocation = async (id: string) => {
    try {
      await prisma.location.delete({
        where: { id },
      });
      return { success: true };
    } catch (error) {
      console.error("Error deleting location:", error);
      throw new Error("Error deleting location");
    }
  }