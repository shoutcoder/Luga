"use server"

import prisma from "@/lib/prisma";

interface Contacts {
    id:string,
    name: string,
    email: string,
    message: string,
    createdAt:Date;
}
interface ContactInput {
    name: string;
    email: string;
    message: string;
}   
export const ContactDetails = async ():Promise<Contacts[]>=>{
    try{
        const Contacts = await prisma.contact.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                message:true,
                createdAt:true,
            },
            orderBy:{
                createdAt:"asc"
            }
        })
        return Contacts;
    }
    catch(err){
        return []
    }
}

export const CreateDetails = async ({ name, email, message }: ContactInput): Promise<boolean> => {
    try {
        const contact = await prisma.contact.create({
            data: {
                name,
                email,
                message,
            },
        });
        return true;
    } catch (err) {
        console.error("Error creating contact:", err);
        return false;
    }
};
export const DeleteDetails = async (id: string): Promise<boolean> => {
    try {
        await prisma.contact.delete({
            where: { id },
        });
        return true;
    } catch (err) {
        console.error("Error deleting contact:", err);
        return false;
    }
};
