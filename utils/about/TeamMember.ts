"use server"

import prisma from "@/lib/prisma";

interface TeamMember {
    id:string,
    name: string,
    role: string,
    imageUrl: string,
    bio?:string,
}
export const TeamMemberDetails = async ():Promise<TeamMember[]>=>{
    try{
        const teamDetails = await prisma.teamMember.findMany({
            select:{
                id:true,
                name:true,
                role:true,
                imageUrl:true,
            },
            orderBy:{
                createdAt:"asc"
            }
        })
        return teamDetails;
    }
    catch(err){
        return []
    }
}


export const createTeamMember = async (
    data: Omit<TeamMember, "id">
  ): Promise<{ success: boolean }> => {
    try {
      await prisma.teamMember.create({ data });
      return { success: true };
    } catch {
      return { success: false };
    }
  };
  
  export const updateTeamMember = async (
    id: string,
    data: Partial<TeamMember>
  ): Promise<{ success: boolean }> => {
    try {
      await prisma.teamMember.update({ where: { id }, data });
      return { success: true };
    } catch {
      return { success: false };
    }
  };
  
  export const deleteTeamMember = async (
    id: string
  ): Promise<{ success: boolean }> => {
    try {
      await prisma.teamMember.delete({ where: { id } });
      return { success: true };
    } catch {
      return { success: false };
    }
  };