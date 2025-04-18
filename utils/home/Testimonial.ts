"use server"

import prisma from "@/lib/prisma";

interface TestimonialData {
    id:string,
    name: string
    avatar: string
    text: string
    rating: number
  }
export const TestimonialDetails = async ():Promise<TestimonialData[]>=>{
    try{
        const TestimonialData = await prisma.testimonial.findMany({
            select:{
                id:true,
                name:true,
                avatar:true,
                text:true,
                rating:true,
            }
        })
        return TestimonialData;
    }
    catch(err){
        return []
    }
}