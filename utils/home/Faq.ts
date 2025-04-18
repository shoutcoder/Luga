"use server"

import prisma from "@/lib/prisma";

interface Faqs {
    id:string,
    question: string,
    answer: string,
}
export const FaqDetails = async ():Promise<Faqs[]>=>{
    try{
        const Faqs = await prisma.faq.findMany({
            select:{
                id:true,
                question:true,
                answer:true,
            }
        })
        return Faqs;
    }
    catch(err){
        return []
    }
}
