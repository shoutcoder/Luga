"use server"

import prisma from "@/lib/prisma";

export interface TestimonialData {
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

/** update one testimonial */
export const updateTestimonial = async (
    id: string,
    data: { name: string; avatar: string; text: string; rating: number }
  ): Promise<{ success: boolean; error?: any }> => {
    try {
      await prisma.testimonial.update({
        where: { id },
        data: { name: data.name, avatar: data.avatar, text: data.text, rating: data.rating },
      })
      return { success: true }
    } catch (error) {
      console.error("update testimonial error", error)
      return { success: false, error }
    }
  }
  
  /** create new testimonial */
  export const createTestimonial = async (
    data: Omit<TestimonialData, 'id'>
  ): Promise<{ success: boolean; testimonial?: TestimonialData; error?: any }> => {
    try {
      const testimonial = await prisma.testimonial.create({ data })
      return { success: true, testimonial }
    } catch (error) {
      console.error("create testimonial error", error)
      return { success: false, error }
    }
  }
  
  /** delete a testimonial */
  export const deleteTestimonial = async (
    id: string
  ): Promise<{ success: boolean; error?: any }> => {
    try {
      await prisma.testimonial.delete({ where: { id } })
      return { success: true }
    } catch (error) {
      console.error("delete testimonial error", error)
      return { success: false, error }
    }
  }