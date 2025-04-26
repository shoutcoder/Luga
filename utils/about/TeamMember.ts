"use server"

import prisma from "@/lib/prisma";

interface TeamMembers {
    id:string,
    name: string,
    role: string,
    imageUrl: string,
    bio?:string,
}
export const TeamMemberDetails = async ():Promise<TeamMembers[]>=>{
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
